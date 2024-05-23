const express = require("express");

const getShow = (req,res,next) => {
    res.json({
        success: true,
        message: "You've requested the comedy TV shows"
    });
};

module.exports.getShow = getShow;