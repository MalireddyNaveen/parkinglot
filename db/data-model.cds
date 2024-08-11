namespace my.parking;

using {cuid} from '@sap/cds/common';

entity PlotNOs {
  key plot_NO     : String;
      vehicleType : String;
      processType : String;
      available   : Boolean;
      reserved    : Boolean;
      vehical     : Association to VehicalDeatils
}

entity VehicalDeatils {
  key vehicalNo      : String;
      driverName     : String;
      phone          : Integer64;
      vehicleType    : String;
      processType    : String;
      assignedDate   : String;
      unassignedDate : String;
      estimatedTime  : String;
      reserved       : Boolean;
      plotNo         : Association to PlotNOs

}

entity Allotment : cuid {
  vehicalDetails : Association to VehicalDeatils;
  plotNo         : Association to PlotNOs;
  assignedDate   : DateTime
}

entity History : cuid {
  vehicalNo      : String;
  driverName     : String;
  phone          : Integer64;
  vehicalType    : String;
  assignedDate   : String;
  unassignedDate : String;
  estimatedTime  : String;
  reserved       : Boolean;
   vehicleType    : String;
      processType    : String;
  plotNo         : Association to PlotNOs
}

entity Reservation {
  key vehicalNo     : String;
      driverName    : String;
      phone         : Integer64;
      estimatedTime : String;
      notify        : String;
      notifySuper   : String;
      status        : Boolean;
      vehicleType    : String;
      processType    : String;
      plotNo        : Association to PlotNOs

}

entity Message : cuid {
  user    : String;
  message : String;

}

entity Count : cuid {
  countSecurity   : Integer;
  countSupervisor : Integer;
}
