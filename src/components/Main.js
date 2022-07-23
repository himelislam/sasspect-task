import React, { useState } from 'react';

const Main = () => {
    const [unFormattedJson, setUnFormattedJson] = useState()
    const [formattedJson, setFormattedJson] = useState()
    const [errorMessage, setErrorMessage] = useState()

    // formating unformatted json to formatted json
    const handleFormatJson = () => {
        try {
            const formattedJson = JSON.stringify(JSON.parse(unFormattedJson), null, 4);
            setFormattedJson(formattedJson)
        }
        catch (err) {
            setErrorMessage(err)
            setFormattedJson(0)
        }
    }


    // setting unformatted json to the state
    const handleUnFormattedJson = (event) => {
        const unFormattedJson = event.target.value;
        setUnFormattedJson(unFormattedJson);
    }


    // clearing both textarea
    const handleClearData = () => {
        setFormattedJson([])
        setUnFormattedJson([])
    }


    return (
        <div className='w-100'>
            <div className='mt-2'>
                <button className='btn btn-primary uppercase text-white p-2 rounded bg-green-800 mr-3 mt-2 ' type="" onClick={handleFormatJson}>Format Json</button>
                <button className='btn btn-primary uppercase text-white p-2 rounded bg-red-800 mr-3 mt-2' type="" onClick={handleClearData}>Clear Data</button>
            </div>
            <div className='flex mx-auto justify-center'>
                <div className='m-4'>
                    <h1 className='text-3xl font-semibold text-gray-700 mb-2'>Unformatted Json</h1>
                    <textarea className='border w-[600px] h-[500px] p-3 bg-slate-100' placeholder='Input Here' name='unformat' value={unFormattedJson} onChange={handleUnFormattedJson}></textarea>
                </div>
                <div className='m-4'>
                    <h1 className='text-3xl font-semibold text-gray-700 mb-2'>Formatted Json</h1>
                    <textarea className='border w-[600px] h-[500px] p-3 bg-slate-100' placeholder='Output Here' value={formattedJson ? formattedJson : errorMessage}></textarea>
                </div>
            </div>
        </div>
    );
};

export default Main;