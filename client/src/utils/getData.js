import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';

function getBooks(){
    return axios.get("/api/books")
}
