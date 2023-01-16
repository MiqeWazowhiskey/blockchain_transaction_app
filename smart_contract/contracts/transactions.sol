//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCounter;

    event Transfer(
        address from,
        address reciever,
        uint256 amount,
        uint256 time,
        string message,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        uint256 time;
        string message;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToChain(
        address receiver,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCounter++;
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                block.timestamp,
                message,
                keyword
            )
        );
        emit Transfer(
            msg.sender,
            receiver,
            amount,
            block.timestamp,
            message,
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
