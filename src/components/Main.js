import React, { useState } from 'react';
import jsonview from '@pgrabovets/json-view';

const Main = () => {
    const [unFormattedJson, setUnFormattedJson] = useState({})
    const [formattedJson, setFormattedJson] = useState({})
    const [errorMessage, setErrorMessage] = useState()

    const handleFormatJson = () => {
        try {
            const formattedJson = JSON.stringify(JSON.parse(unFormattedJson), null, 4);
            const tree = jsonview.create(formattedJson);
            console.log(tree)
            // jsonview.render(tree);
            // jsonview.expand(tree);
            setFormattedJson(formattedJson)
        }
        catch (err) {
            setErrorMessage(err)
            setFormattedJson(0)
        }


    }

    const handleUnFormattedJson = (event) => {
        const unFormattedJson = event.target.value;
        setUnFormattedJson(unFormattedJson);
    }

    const handleClearData = () => {
        setFormattedJson([])
        setUnFormattedJson([])
    }
    return (
        <div className='w-100'>
            <div className='my-4'>
                <button className='btn btn-primary uppercase text-white p-2 rounded bg-green-800 mr-4 ' type="" onClick={handleFormatJson}>Format Json</button>
                <button className='btn btn-primary uppercase text-white p-2 rounded bg-red-800 mr-4' type="" onClick={handleClearData}>Clear Data</button>
            </div>
            <div className='flex mx-auto justify-center'>
                <div className='m-4'>
                    <h1 className='text-2xl text-lime-700'>Unformatted Json</h1>
                    <textarea className='border w-[600px] h-[500px] p-3' placeholder='Input Here' name='unformat' value={unFormattedJson} onChange={handleUnFormattedJson}></textarea>
                </div>
                <div className='m-4'>
                    <h1 className='text-2xl text-lime-700'>Formatted Json</h1>
                    <textarea className='border w-[600px] h-[500px] p-3' placeholder='Output Here' value={formattedJson ? formattedJson : errorMessage}></textarea>
                </div>
            </div>
        </div>
    );
};

export default Main;