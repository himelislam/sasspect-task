import React, { useState } from 'react';

const Main = () => {
    const [unFormattedJson, setUnFormattedJson] = useState({})
    const [formattedJson, setFormattedJson] = useState({})
    const [errorMessage, setErrorMessage] = useState()

    const handleFormatJson = () =>{
        try{
            const formattedJson = JSON.stringify(JSON.parse(unFormattedJson), null, 4);
            setFormattedJson(formattedJson)
        }
        catch(err){
            console.log(err)
            setErrorMessage(err)
            setFormattedJson(0)
        }

        
    }

    const handleUnFormattedJson = (event) => {
        const unFormattedJson = event.target.value;
        console.log(unFormattedJson)
        setUnFormattedJson(unFormattedJson);
    }

    const handleClearData = () => {
        setFormattedJson([])
        setUnFormattedJson([])
    }
    return (
        <div className='w-100'>
            <div>
                <button className='btn btn-lg btn-red-400' type="" onClick={handleFormatJson}>Format Json</button>
                <button className='btn btn-md' type="" onClick={handleClearData}>Clear Data</button>
            </div>
            <div className='flex mx-auto justify-center'>
                <div className='m-4'>
                    <h1>Unformatted Json</h1>
                    <textarea className='border w-[600px] h-[500px]' name='unformat' value={unFormattedJson} onChange={handleUnFormattedJson}></textarea>
                </div>
                <div className='m-4'>
                    <h1>Formated Json</h1>
                    <textarea className='border w-[600px] h-[500px]' value={formattedJson ? formattedJson : errorMessage}></textarea>
                </div>
            </div>
        </div>
    );
};

export default Main;