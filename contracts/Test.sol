import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract Test is Ownable, Pausable
{
    function fundContract() public payable
    {
        //(bool success, ) = address(this).call{value: msg.value}("");        
    }

    function withdraw() public onlyOwner
    {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        //payable(owner()).transfer(address(this).balance);
    }

}