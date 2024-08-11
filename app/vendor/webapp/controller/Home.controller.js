
sap.ui.define([
   "./BaseController",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
function (Controller,MessageToast,JSONModel,Filter,FilterOperator) {
    "use strict";
    return Controller.extend("com.app.vendor.controller.Home", {
        onInit: function () {
            var oModelV2 = this.getOwnerComponent().getModel("ModelV2");
            this.getView().setModel(oModelV2)
            var today = new Date();
 
            // Calculate tomorrow based on today
            var tomorrow = new Date(today);
            tomorrow.setDate(today.getDate());
 
            // Set the minimum date for the date picker
            var oDateTimePicker = this.getView().byId("idEstimatedTime");
            oDateTimePicker.setMinDate(tomorrow);
        },
        registerBtn: async function () {
            const oModel = this.getView().getModel("ModelV2");
            var oView =this.getView();
            var oSelect = oView.byId("idProcessTypeRes");
 
            // Get the selected key
            // var sSelectedKey = oSelect.getSelectedKey();
            // console.log("Selected Key: " + sSelectedKey);
 
            // Alternatively, get the selected item and its text
            var oSelectedItem = oSelect.getSelectedItem();
            var sSelectedText = oSelectedItem ? oSelectedItem.getText() : null;
            console.log("Selected Text: " + sSelectedText);
            var oSelectVehicalType = oView.byId("idVehicleTypeRes")
            var oSelectedItemVT = oSelectVehicalType.getSelectedItem();
            var sSelectedTextVT = oSelectedItemVT ? oSelectedItemVT.getText() : null;
            var oVehicalNo=oView.byId("idVehicalNo1").getValue();
            var oDriverName=oView.byId("idDriverName").getValue();
            var oPhone=parseInt(oView.byId("idPhone").getValue());
            //var oVehicaltype=oView.byId("").getValue();
            //var oPlot = this.selectedPlotNo;
            //var oPlot=oView.byId("idSlot").getText();
            var oestimatedTime=oView.byId("idEstimatedTime").getValue();
            if(!(oVehicalNo && oDriverName && oPhone && oestimatedTime)){
                MessageToast.show("Please enter all Details")
                this.getView().byId("idMessageStrip8").setType("Warning")
                this.getView().byId("idMessageStrip8").setText("Please enter all Details")
                this.getView().byId("idMessageStrip8").setVisible(true)
                return
            }
           
            var vehicalNoRegex=/^[A-Z]{2}\s?\d{1,2}\s?[A-Z]{1,2}\s?\d{4}$/;
            if (!(vehicalNoRegex.test(oVehicalNo))) {
                // MessageToast.show("please enter valid Vehical Number")
                this.getView().byId("idMessageStrip8").setType("Error")
                this.getView().byId("idMessageStrip8").setText("Please enter valid Vehicle Number")
                this.getView().byId("idMessageStrip8").setVisible(true)
                return
            }
            var phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
            if (!(phoneRegex.test(oPhone))) {
                // MessageToast.show("please enter valid PhoneNumber")
                this.getView().byId("idMessageStrip8").setType("Error")
                this.getView().byId("idMessageStrip8").setText("please enter valid PhoneNumber")
                this.getView().byId("idMessageStrip8").setVisible(true)
                return
            }
            console.log(typeof(oestimatedTime))
            const oLocalModel1 = new JSONModel({
                reserve:{
                vehicalNo: oVehicalNo,
                driverName: oDriverName,
                phone : oPhone,
                estimatedTime: oestimatedTime,
                notifySuper:"",
                status:false,
                vehicleType    :sSelectedTextVT,
                processType    : sSelectedText
               
                },
                // plotNo:{
                //  reserved:true
                // }
            });
            this.getView().setModel(oLocalModel1, "localModel");
 
            const oPayload = this.getView().getModel("localModel").getProperty("/");
            oPayload.reserve.notifySuper=`Hey! I am ${oDriverName}, requesting a slot for vehical number: ${oVehicalNo} for the estimated Date and Time: ${oestimatedTime}`
            var oVehicleExist = await this.checkVehicleNo(oModel, oPayload.reserve.vehicalNo)
 
            if (oVehicleExist) {
                // MessageToast.show("Vehicle already exsist")
                this.getView().byId("idMessageStrip8").setType("Error")
                this.getView().byId("idMessageStrip8").setText("Vehicle already exsist")
                this.getView().byId("idMessageStrip8").setVisible(true)
                return
            };
            // var oPlotExist = await this.checkVehicleNo(oModel, oPlot)
            // if (oPlotExist) {
            //  // MessageToast.show("Plot already Assigned")
            //  this.getView().byId("idMessageStrip8").setType("Error")
            //  this.getView().byId("idMessageStrip8").setText("Plot already Assigned")
            //  this.getView().byId("idMessageStrip8").setVisible(true)
               
 
            //  return
            // };
            var oVehicleExist1 = await this.checkVehicleNo1(oModel, oPayload.reserve.vehicalNo)
 
            if (oVehicleExist1) {
                 MessageToast.show("Vehicle already exsist")
                this.getView().byId("idMessageStrip8").setType("Error")
                this.getView().byId("idMessageStrip8").setText("Vehicle already exsist")
                this.getView().byId("idMessageStrip8").setVisible(true)
                return
               
            };
            try {
                // Assuming createData method sends a POST request
 
                await this.createData(oModel, oPayload.reserve, "/Reservation");
                // oModel.update("/PlotNOs('" + oPlot + "')", oPayload.plotNo, {
                //  success: function () {
 
                //  }.bind(this),
                //  error: function (oError) {
                //      sap.m.MessageBox.error("Failed to update book: " + oError.message);
                //  }.bind(this)
                // });
                // MessageToast.show(`${oVehicalNo} requested to assign a Slot with ${oPlot}`)
                this.getView().byId("idMessageStrip8").setType("Information")
                this.getView().byId("idMessageStrip8").setText(`${oVehicalNo} requested to assign a Slot`)
                this.getView().byId("idMessageStrip8").setVisible(true)
 
 
               
               
            } catch (error) {
                console.error("Error:", error);
            }
 
            this.clear();
 
            // oPayload.vehicalDetails.reserved = true;
            // oPayload.vehicalDetails.estimatedTime = this.getView().byId("idEstimatedTime").getValue();
            // const oModel = this.getView().byId("pageContainer").getModel("ModelV2");
            // await this.createData(oModel, oPayload.vehicalDetails, "/VehicalDeatils");
            var sMessage=`Dear ${oDriverName},We inform you that your vehicle with license plate number ${oVehicalNo} is requested for parking slot number for estimated time:${oestimatedTime}. After conforming your requst you will get SMS with the slot number.`
            this.onSms(oPhone,sMessage);
           
        },
        checkVehicleNo: async function (oModel, sVehicalNo, sResrved) {
            return new Promise((resolve, reject) => {
                oModel.read("/VehicalDeatils", {
                    filters: [
                        new Filter("vehicalNo", FilterOperator.EQ, sVehicalNo),
 
 
                    ],
                    success: function (oData) {
                        resolve(oData.results.length > 0);
                    },
                    error: function () {
                        reject(
                            "An error occurred while checking username existence."
                        );
                    }
                })
            })
        },
        checkVehicleNo1: async function (oModel, sVehicalNo, sResrved) {
            return new Promise((resolve, reject) => {
                oModel.read("/Reservation", {
                    filters: [
                        new Filter("vehicalNo", FilterOperator.EQ, sVehicalNo),
 
 
                    ],
                    success: function (oData) {
                        resolve(oData.results.length > 0);
                    },
                    error: function () {
                        reject(
                            "An error occurred while checking username existence."
                        );
                    }
                })
            })
        },
        clear:async function(){
            var oView=this.getView();
            oView.byId("idVehicalNo1").setValue();
            oView.byId("idDriverName").setValue();
            oView.byId("idPhone").setValue();  
            oView.byId("idEstimatedTime").setValue();
            oView.byId("idSlot").setValue();
 
        },
       
    });
});
 
 