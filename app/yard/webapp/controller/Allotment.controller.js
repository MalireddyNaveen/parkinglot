sap.ui.define([
  "./BaseController",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/odata/v2/ODataModel",
], function(Controller, JSONModel,ODataModel) {
  "use strict";

  return Controller.extend("com.app.yard.controller.Allotment", {
    onInit:function(){
      
      var oModel = new ODataModel("/v2/odata/v4/catalog/");
                this.getView().setModel(oModel);
                const oLocalModel = new JSONModel({
                  vehicalNo   : "",
                  driverName  : "",
                  phone       :0,
                  vehicalType : "",
                  plotNo_plot_NO   :""
                });
                this.getView().setModel(oLocalModel, "localModel");
      
    },
    onAssignPress: async function() {
      const oPayload = this.getView().getModel("localModel").getProperty("/");
      const oModel = this.getView().getModel(); // Assuming "ModelV2" is your ODataModel
  
      console.log("Payload:", oPayload);
  
      try {
          // Assuming createData method sends a POST request
          await this.createData(oModel, oPayload, "/VehicalDeatils");
        //   oModel.update("/PlotNOs(" + oPayload.plotNo_plot_NO + ")", oPayload.vehicalNo, {
        //     success: function () {
        //         this.getView().byId("idBookTable").getBinding("items").refresh();
                
        //     }.bind(this),
        //     error: function (oError) {
                
        //         sap.m.MessageBox.error("Failed to update book: " + oError.message);
        //     }.bind(this)
        // });
      } catch (error) {
          console.error("Error:", error);
      }
  }
  
  });
});
