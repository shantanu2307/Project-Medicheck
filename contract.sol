pragma solidity ^0.5.0;

contract medicineSupply 
{
    struct retailer
    {
        address retailerId;
        string name;
        string medDesc;
    }
    struct medicine 
    {
        uint256 medId;
        string manuDate;
        string medName;
        string mrp;
        string expiry;
        uint256 numRetail;
        mapping(uint256=>retailer) delivery;
        address manufacturer;
    }
    mapping(uint256=>medicine) medProd;
    uint256 meds=0;
    function newMed(string memory _medName,string memory _mrp,string memory _expiry,string memory,string memory _manuDate) public returns(bool)
    {
        medicine memory NewMed=medicine({medId:meds,medName:_medName,mrp:_mrp,expiry:_expiry,manufacturer:msg.sender,numRetail:0,manuDate:_manuDate});
        medProd[meds]=NewMed;
        meds++;
        return true;
    }
    function concatenate(string memory _a,string memory _b) pure internal returns(string memory)
    {
        bytes memory a=bytes(_a);
        bytes memory b=bytes(_b);
        string memory ab=new string(a.length+b.length);
        bytes memory c=bytes(ab);
        uint256 k=0;
        for(uint256 i=0;i<a.length;i++)c[k++]=a[i];
        for(uint256 i=0;i<b.length;i++)c[k++]=b[i];
        return string(c);
    }
    function addRetailer(uint256 _medId,string memory _date,string memory _loc,string memory _name) public returns(string memory)
    {
        string memory description=" DATE: ";
        description=concatenate(description,_date);
        string memory location="  LOCATION: ";
        description=concatenate(description,location);
        description=concatenate(description,_loc);
        retailer memory newRetail=retailer({retailerId:msg.sender,medDesc:description,name:_name});
        medProd[_medId].delivery[medProd[_medId].numRetail]=newRetail;
        medProd[_medId].numRetail++;
        return description;
    }
    function medInfo(uint256 _medId) view public returns(string memory)
    {
        string memory info="Medicine name: ";
        info=concatenate(info,medProd[_medId].medName);
        info=concatenate(info,"  MRP: ");
        info=concatenate(info,medProd[_medId].mrp);
        info=concatenate(info," Manufacture Date: ");
        info=concatenate(info,medProd[_medId].manuDate);
        info=concatenate(info,"  Expiry: ");
        info=concatenate(info,medProd[_medId].expiry);

        for(uint256 i=0;i<medProd[_medId].numRetail;i++)
        {
            info=concatenate(info,medProd[_medId].delivery[_medId].medDesc);
        }
        return info;
    }   
}