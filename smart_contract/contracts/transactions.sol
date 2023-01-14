//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCounter;

    event Transfer(
        address from,
        address reciever,
        uint256 amount,
        string message,
        uint256 time,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address reciever;
        uint256 amount;
        uint256 time;
        string message;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToChain(
        address payable to,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCounter++;
        transactions.push(
            TransferStruct(
                msg.sender,
                to,
                amount,
                block.timestamp,
                message,
                keyword
            )
        );
        emit Transfer(
            msg.sender,
            to,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    function getTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }
}
