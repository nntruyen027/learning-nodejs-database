var express = require('express');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2706',
    database: 'quanlihocsinh'
})

con.connect(err => {
    if (err) throw err;

    console.log('Connected!');

    con.query('create table if not exists hocsinh (ma_hocsinh varchar(10) primary key , ten_hocsinh nvarchar(255), gioitinh bit(1))', (err, result) => {
        if (err) throw err;
        console.log('table created');
    })
})


