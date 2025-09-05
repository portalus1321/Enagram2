import {
    ChevronLeftIcon,
    ChevronRightIcon,
    PlusCircleIcon
} from '@heroicons/react/24/outline'
import Lcomobox from '../../Components/FormComps/Comobox';
import LCheckbox from '../../Components/FormComps/Checkbox';
import React, { useState } from "react";

async function diffTexts(oldStr, newStr, setProgress) {
    const oldWords = oldStr.split(" ");
    const newWords = newStr.split(" ");
    const m = oldWords.length;
    const n = newWords.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (oldWords[i - 1] === newWords[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }

        setProgress(Math.floor((i / m) * 50));
        await new Promise((resolve) => setTimeout(resolve, 0));
    }

    let i = m, j = n;
    let left = "";
    let right = "";
    let totalSteps = m + n;
    let stepCount = 0;

    while (i > 0 && j > 0) {
        if (oldWords[i - 1] === newWords[j - 1]) {
            left = oldWords[i - 1] + " " + left;
            right = newWords[j - 1] + " " + right;
            i--; j--;
        } else if (dp[i - 1][j] >= dp[i][j - 1]) {
            left = `<span style="background:#f28b82; color:white">${oldWords[i - 1]}</span> ` + left;
            i--;
        } else {
            right = `<span style="background:#52c955; color:white">${newWords[j - 1]}</span> ` + right;
            j--;
        }
        stepCount++;
        setProgress(50 + Math.floor((stepCount / totalSteps) * 50));
        await new Promise((resolve) => setTimeout(resolve, 0));
    }

    while (i > 0) {
        left = `<span style="color:red">${oldWords[i - 1]}</span> ` + left;
        i--; stepCount++;
        setProgress(50 + Math.floor((stepCount / totalSteps) * 50));
        await new Promise((resolve) => setTimeout(resolve, 0));
    }

    while (j > 0) {
        right = `<span style="color:green">${newWords[j - 1]}</span> ` + right;
        j--; stepCount++;
        setProgress(50 + Math.floor((stepCount / totalSteps) * 50));
        await new Promise((resolve) => setTimeout(resolve, 0));
    }

    setProgress(100);
    return { left, right };
}

const TextCompare = () => {
    const [oldText, setOldText] = useState("");
    const [newText, setNewText] = useState("");
    const [leftOutput, setLeftOutput] = useState("");
    const [rightOutput, setRightOutput] = useState("");
    const [workprogress, setWorkprogress] = useState(0);

    const handleCompare = async () => {
        if (workprogress == 0) {
            const { left, right } = await diffTexts(oldText, newText, setWorkprogress);
            setLeftOutput(left);
            setRightOutput(right);
        }

    };

    const resetProgress = () => {
        setWorkprogress(0);
        setOldText("");
        setNewText("");
        setLeftOutput("");
        setRightOutput("");
    };


    return (
        <div className=' flex sm:h-5/6 h-full flex-col'>
            <div className='h-[140px] md:h-20'>
                <div className=' flex w-full items-center flex-col h-[140px]  md:h-[auto] bg md:flex-row justify-between '>
                    <div className='flex flex-col items-center justify-start md:flex-row w-full'>
                        <Lcomobox className="h-[0px] text-[#383a48] relative w-full" />
                        <LCheckbox />
                    </div>

                    <div className='relative h-[50px] ml-[10px] mr-[10px] flex justify-end w-full md:w-auto'>
                        <div onClick={resetProgress} className={`cursor-pointer h-[40px]  rounded-[10px] flex items-center justify-center w-full md:w-auto text-nowrap ${workprogress === 100 ? "bg-blue-400" : "bg-[#383a4899]"}`}>
                            <PlusCircleIcon className='h-[30px] text-white ml-[15px]' />
                            <div className='text-white ml-[10px] mr-[20px]'>ახლის გახსნა</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='relative h-[200px] w-full flex flex-col sm:flex-row flex-1 items-center pt-3 pb-10 mt-[20px]'>

                <div className='flex-1 h-full w-full relative '>
                    {workprogress == 0 && (<textarea
                        spellCheck={false}
                        onChange={(e) => setOldText(e.target.value)}

                        className=' flex-1 h-full w-full resize-none p-[10px] rounded-[10px] border-0 outline-none focus:ring-0 bg-[#f0f7ff]' placeholder='დაიწყე წერა...' name="" id="TA2">

                    </textarea>)}
                    {workprogress === 100 && (<div
                        dangerouslySetInnerHTML={{ __html: leftOutput }}
                        className='border-0 overflow-y-auto max-h-[200px] sm:max-h-[500px] h-full p-[10px] bg-[#f0f7ff] rounded-[10px] whitespace-pre-wrap break-words text-left'>



                    </div>)}
                </div>
                {workprogress < 100 && workprogress > 1 && (
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70px] h-[120px] w-[450px] border-[3px]  rounded-[20px] bg-white z-30 flex flex-row items-center justify-center '>
                        <div className='w-[80px] h-[80px] m-[20px] left-0 top-0 rounded-full border-blue-600 border-[3px] flex items-center justify-center' >
                            <div className='w-[40px] h-[40px] bg-blue-300 rounded-full flex items-center justify-center animate-color-loop'>
                                <div className='w-[20px] h-[20px] bg-blue-500 rounded-full'></div>
                            </div>

                        </div>

                        <div className='flex-1 mr-[20px] my-[20px] h-full  py-[20px] flex flex-col justify-between '>
                            <div className='w-full h-[20px] bg-white flex justify-start text-[#383a4899]' >Converting...Thank you For your Patience </div>
                            <div className='w-full h-[30px] bg-white flex flex-row ' >

                                <div className='font-extrabold text-lg flex justify-start w-[60px]'>{workprogress}%</div>
                                <div className='font-extrabold text-lg w-full  flex items-center justify-start'>
                                    <div className='h-[14px] bg-blue-500 rounded-[10px] w-full   '
                                        style={{ width: `${workprogress}%` }}
                                    ></div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
                <div className='w-[60px] relative rotate-90 sm:rotate-0 sm:h-[20px] h-[60px] flex items-center justify-center'>
                    <ChevronLeftIcon className='relative stroke-[3] -translate-x-[1px] w-[20px] text-[#323232]' />
                    <ChevronRightIcon className='relative stroke-[3] translate-x-[1px] w-[20px] text-[#323232]' />
                    <div className='absolute top-1/2 -translate-y-1/2 bg-[#323232] w-[25px] h-[3px]'></div>
                </div>
                <div className='flex-1 h-full w-full relative '>
                    {workprogress == 0 && (<textarea
                        spellCheck={false}
                        onChange={(e) => setNewText(e.target.value)}

                        className='flex-1 h-full w-full resize-none p-[10px] rounded-[10px] border-0 outline-none focus:ring-0 bg-[#f0f7ff] overflow-auto' placeholder='დაიწყე წერა...' name="" id="TA2">

                    </textarea>)}
                    {workprogress === 100 && (<div
                        dangerouslySetInnerHTML={{ __html: rightOutput }}
                        className='border-0 overflow-y-auto max-h-[200px] sm:max-h-[500px] h-full p-[10px] bg-[#f0f7ff] rounded-[10px] whitespace-pre-wrap break-words text-left'>


                    </div>)}

                </div>


            </div>
            <div className='h-[60px] flex items-start justify-center'> <div onClick={handleCompare} className={` cursor-pointer h-[60px] bg-[#383a4899] flex items-center justify-center p-4 px-[50px] max-w-[100vw] rounded-[10px] text-white text-lg ${workprogress == 0 ? "bg-blue-400" : "bg-[#383a4899]"}`}> შედარება </div> </div>

        </div>




    );
};

export default TextCompare;