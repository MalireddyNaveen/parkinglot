
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller,JSONModel, MessageToast) {
    "use strict";
 
    return Controller.extend("com.app.doordocking.controller.Home", {
        onInit: function () {
            // Initialization code here
            // const oRouter = this.getOwnerComponent().getRouter();
           
            // const oLocalModel = new JSONModel({
 
            // });
 
            var oModel = new JSONModel(sap.ui.require.toUrl("com/app/doordocking/model/data.json"));
            this.getView().setModel(oModel);
            // var oModelV2 = this.getOwnerComponent().getModel("ModelV2");
            // this.getView().byId("pageContainer").setModel(oModelV2);
            // this.getView().byId("idIconTabBar").setModel(oModelV2);
            // this.getView().byId("page2").setModel(oLocalModel, "localModel");
        },
       
 
        onSideNavButtonPress: function () {
            var oToolPage = this.byId("toolPage");
            var bSideExpanded = oToolPage.getSideExpanded();
            oToolPage.setSideExpanded(!bSideExpanded);
        },
 
        onFilterSelect: function (oEvent) {
            var sKey = oEvent.getParameter("key");
            MessageToast.show("Selected Tab: " + sKey);
            // Add your logic here for filter selection
        },
 
        onNotificationPress: function () {
            MessageToast.show("Notification Button Pressed");
            // Add your logic here for notification button press
        },
 
        handleUserNamePress: function (oEvent) {
            MessageToast.show("User Name Button Pressed");
            // Add your logic here for user name button press
        },
 
        onAvatarPressed: function () {
            MessageToast.show("Avatar Pressed");
            // Add your logic here for avatar press
        },
 
        onItemSelect: function (oEvent) {
 
            var oItem = oEvent.getParameter("item");
            this.byId("pageContainer").to(this.getView().createId(oItem.getKey()));
        },
       
       
    //    onPrintBtn: function () {
    //           // Fetch values from the view
    //           //    const oPayload = this.getView().byId("page2").getModel("localModel").getProperty("/").vehicalDetails;
    //         var oView = this.getView();
    //         var OT=oView.byId("idinputT").getValue();
           
    //           var printWindow = window.open('', '', 'height=600,width=800');
         
    //           // Write HTML content to the print window
             
    //           printWindow.document.write('<html><head><title>Print Receipt</title>');
    //           printWindow.document.write('<style>');
    //           printWindow.document.write('body { font-family: Arial, sans-serif; margin: 20px; }');
    //           printWindow.document.write('.details-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }');
    //           printWindow.document.write('.details-table th, .details-table td { border: 1px solid #000; padding: 8px; text-align: left; }');
    //           printWindow.document.write('.details-table th { background-color: #f2f2f2; }');
    //         //   printWindow.document.write('.qr-code { text-align: center; margin-top: 20px; }');
    //           printWindow.document.write('.container {display: flex;align-items: center; /* Center align items vertically */gap: 10px; /* Space between the items */ padding: 20px; /* Optional: Add some padding around the container */ }');
    //           printWindow.document.write('.qr-code { width: 100px; /* Adjust size as needed */ height: 100px; /* Adjust size as needed */}');
    //           printWindow.document.write('.text-content {display: flex;flex-direction: column; /* Stack paragraphs vertically */gap: 5px; /* Space between paragraphs */}');
             
    //           printWindow.document.write('</style>');
    //           printWindow.document.write('</head><body>');
    //           printWindow.document.write('<div class="print-container">');
    //           printWindow.document.write('<h1 class="heading">Transit Pass-Inward:</h1>');
    //           printWindow.document.write('</div>');
    //           printWindow.document.write('<div class="container" >');
    //           printWindow.document.write('<div class="qr-code" id="qrcode"></div>');
             
    //           printWindow.document.write('<div class="text-content">');
    //           printWindow.document.write('<p>Transit Pass:</p>');
    //           printWindow.document.write('<p>Vehicle Number:</p>');
    //           printWindow.document.write('<p>Driver Name:</p>');
    //           printWindow.document.write('<p>Driver Mobile:</p>');
    //           printWindow.document.write('<p>Vehicle Type:</p>');
    //           printWindow.document.write('<p>Warehouse Door:</p>');
    //           printWindow.document.write('</div>');
 
    //           printWindow.document.write('</div>');
    //           printWindow.document.write('<table class="details-table">');
    //           printWindow.document.write('<tr><th>ASN Number</th><th>PO</th><th>Vendor</th><th>Gate Entry Number</th></tr>');
    //         //   printWindow.document.write('<tr><td>Vehicle Number</td><td>' + vehicleNo  + '</td><td rowspan="6"><div id="qrcode"></div></td></tr>');
    //         //   printWindow.document.write('<tr><td>Parking Slot Number</td><td>' + slotNo + '</td></tr>');
    //         //   printWindow.document.write('<tr><td>Driver Name</td><td>' + driverName+ '</td></tr>');
    //         //   printWindow.document.write('<tr><td>Driver Phone Number</td><td>' + phoneNumber + '</td></tr>');
    //         //   printWindow.document.write('<tr><td>Delivery Type</td><td>' + sSelectedText + '</td></tr>');
    //         //   printWindow.document.write('<tr><td>Vehicle Type</td><td>' + sSelectedTextVT + '</td></tr>');
    //           printWindow.document.write('</table>');
         
    //           // Close document and initiate QR code generation
    //           printWindow.document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>');
    //           printWindow.document.write('<script>');
    //           printWindow.document.write('setTimeout(function() {');
    //           printWindow.document.write('new QRCode(document.getElementById("qrcode"), {');
    //           printWindow.document.write('text: "Vehicle Number: ' + OT + '"');
    //           printWindow.document.write('width: 100,');
    //           printWindow.document.write('height: 100');
    //           printWindow.document.write('});');
    //           printWindow.document.write('}, 1000);'); // Adjust the timeout for QR code rendering
    //           printWindow.document.write('</script>');
         
    //           // Close document
    //           printWindow.document.write('</body></html>');
    //           printWindow.document.close();
    //           printWindow.focus();
         
    //           // Wait for QR code to be fully rendered before printing
    //           setTimeout(function() {
    //               printWindow.print();
    //           }, 1500); // Timeout to ensure the QR code is rendered before printing
    //     },
    onPrintBtn: function () {
        // Fetch values from the view
        var oView = this.getView();
        var oTransitPass = oView.byId("idinputT").getValue();
        var oVehicleNumber = oView.byId("idinput1").getValue();
        var oDriverName = oView.byId("idinput4").getValue();
        var oDriverMobile = oView.byId("idinput5").getValue();
        var oVehicleType = oView.byId("idinput3").getValue();
        var oWarehouseDoor = oView.byId("idinput7").getValue();
        var printWindow = window.open('', '', 'height=600,width=800');
       
        // Write HTML content to the print window
        printWindow.document.write('<html><head><title>Print Receipt</title>');
        printWindow.document.write('<style>');
        printWindow.document.write('.page-container { border: 1px solid #000; padding: 20px; box-sizing: border-box; }'); // Border around the entire page
        printWindow.document.write('body { font-family: Arial, sans-serif; margin: 20px; }');
        printWindow.document.write('.heading { text-align: center; margin-bottom: 20px; }');
        printWindow.document.write('.details-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }');
                  printWindow.document.write('.details-table th, .details-table td { border: 1px solid #000; padding: 8px; text-align: left; }');
                  printWindow.document.write('.details-table th { background-color: #f2f2f2; }');
                  printWindow.document.write('.container { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }');
    printWindow.document.write('.qr-code { width: 100px; height: 100px; }');
    printWindow.document.write('.text-content { flex: 1; max-width: calc(100% - 120px); }'); // Ensure the text content does not overlap with QR code
        printWindow.document.write('</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<div class="page-container">');
        printWindow.document.write('<div class="print-container">');
        printWindow.document.write('<h1 class="heading">Transit Pass-Inward:</h1>');
        printWindow.document.write('</div>');
        printWindow.document.write('<div class="container">');
       
        printWindow.document.write('<div class="text-content">');
        printWindow.document.write('<p>Transit Pass: ' + oTransitPass+ '</p>');
        printWindow.document.write('<p>Vehicle Number: ' + oVehicleNumber+ '</p>');
        printWindow.document.write('<p>Driver Name: ' + oDriverName+ '</p>');
        printWindow.document.write('<p>Driver Mobile: ' + oDriverMobile+ '</p>');
        printWindow.document.write('<p>Vehicle Type: ' + oVehicleType+ '</p>');
        printWindow.document.write('<p>Warehouse Door: ' + oWarehouseDoor+ '</p>');
        printWindow.document.write('</div>');
        printWindow.document.write('<div class="qr-code" id="qrcode"></div>');
        printWindow.document.write('</div>');
       
        printWindow.document.write('<table class="details-table">');
        printWindow.document.write('<tr><th>ASN Number</th><th>PO</th><th>Vendor</th><th>Gate Entry Number</th></tr>');
        printWindow.document.write('</table>');
        printWindow.document.write('</div>');
       
        // Close the document and add QR code generation script
        printWindow.document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>');
        printWindow.document.write('<script>');
        printWindow.document.write('document.addEventListener("DOMContentLoaded", function() {');
        printWindow.document.write('    new QRCode(document.getElementById("qrcode"), {');
        printWindow.document.write('        text: "Vehicle Number: ' + oTransitPass + '",');
        printWindow.document.write('        width: 100,');
        printWindow.document.write('        height: 100');
        printWindow.document.write('    });');
        printWindow.document.write('    setTimeout(function() {');
        printWindow.document.write('        window.print();');
        printWindow.document.write('    }, 1000);'); // Adjust timeout if needed
        printWindow.document.write('});');
        printWindow.document.write('</script>');
       
        // Close document
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
    },
   
    onPrintBtnoutWard: function () {
        // Fetch values from the view
        var oView = this.getView();
        var oTransitPass = oView.byId("idinputT1").getValue();
        var oVehicleNumber = oView.byId("idinput21").getValue();
        var oDriverName = oView.byId("idinput24").getValue();
        var oDriverMobile = oView.byId("idinput25").getValue();
        var oVehicleType = oView.byId("idinput23").getValue();
       
        var printWindow = window.open('', '', 'height=600,width=800');
       
        // Write HTML content to the print window
        printWindow.document.write('<html><head><title>Print Receipt</title>');
        printWindow.document.write('<style>');
        printWindow.document.write('.page-container { border: 1px solid #000; padding: 20px; box-sizing: border-box; }'); // Border around the entire page
        printWindow.document.write('body { font-family: Arial, sans-serif; margin: 20px; }');
        printWindow.document.write('.heading { text-align: center; margin-bottom: 20px; }');
        printWindow.document.write('.details-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }');
                  printWindow.document.write('.details-table th, .details-table td { border: 1px solid #000; padding: 8px; text-align: left; }');
                  printWindow.document.write('.details-table th { background-color: #f2f2f2; }');
                  printWindow.document.write('.container { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }');
    printWindow.document.write('.qr-code { width: 100px; height: 100px; }');
    printWindow.document.write('.text-content { flex: 1; max-width: calc(100% - 120px); }'); // Ensure the text content does not overlap with QR code
        printWindow.document.write('</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<div class="page-container">');
        printWindow.document.write('<div class="print-container">');
        printWindow.document.write('<h1 class="heading">Transit Pass-Outward:</h1>');
        printWindow.document.write('</div>');
        printWindow.document.write('<div class="container">');
       
        printWindow.document.write('<div class="text-content">');
        printWindow.document.write('<p>Transit Pass: ' + oTransitPass+ '</p>');
        printWindow.document.write('<p>Vehicle Number: ' + oVehicleNumber+ '</p>');
        printWindow.document.write('<p>Driver Name: ' + oDriverName+ '</p>');
        printWindow.document.write('<p>Driver Mobile: ' + oDriverMobile+ '</p>');
        printWindow.document.write('<p>Vehicle Type: ' + oVehicleType+ '</p>');
       
        printWindow.document.write('</div>');
        printWindow.document.write('<div class="qr-code" id="qrcode"></div>');
        printWindow.document.write('</div>');
       
        printWindow.document.write('<h1>RDC/Store:AA01-RD-HYDERABAD</h1>');
       
        printWindow.document.write('</div>');
       
        // Close the document and add QR code generation script
        printWindow.document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>');
        printWindow.document.write('<script>');
        printWindow.document.write('document.addEventListener("DOMContentLoaded", function() {');
        printWindow.document.write('    new QRCode(document.getElementById("qrcode"), {');
        printWindow.document.write('        text: "Vehicle Number: ' + oTransitPass + '",');
        printWindow.document.write('        width: 100,');
        printWindow.document.write('        height: 100');
        printWindow.document.write('    });');
        printWindow.document.write('    setTimeout(function() {');
        printWindow.document.write('        window.print();');
        printWindow.document.write('    }, 1000);'); // Adjust timeout if needed
        printWindow.document.write('});');
        printWindow.document.write('</script>');
       
        // Close document
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
    },
   
    });
});
 
 