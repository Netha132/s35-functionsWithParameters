import React, { useRef } from 'react'

function MarkSheet() {
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let sanInputRef=useRef();
    let engInputRef=useRef();
    let mat1AInputRef=useRef();
    let mat1BInputRef=useRef();
    let phyInputRef=useRef();
    let cheInputRef=useRef();

    let sanSpanRef=useRef();
    let engSpanRef=useRef();
    let mat1ASpanRef=useRef();
    let mat1BSpanRef=useRef();
    let phySpanRef=useRef();
    let cheSpanRef=useRef();


    let resultPara=useRef();

    let inputOnFocus=(inputRef)=>{
        inputRef.current.style.backgroundColor=" #F1F1f1";
    }

    let inputOnBlur=(inputRef)=>{
        inputRef.current.style.backgroundColor="";
    }

    let inputOnChange=(inputRef,spanRef)=>{
        let marks=Number(inputRef.current.value)
        if(marks>=0 && marks<=100){
            if(marks>=35){
                spanRef.current.innerHTML="Pass";
                spanRef.current.style.color="green";
            }else{
                spanRef.current.innerHTML="Fail";
                spanRef.current.style.color="red";
            }
        }
        else{
            spanRef.current.innerHTML="Invalid";
            spanRef.current.style.color="blue";
        }
    }

  return (
    <div className='main'>
      <form>
        
        <fieldset className='border'>
        <h1>MarkSheet</h1>
    <fieldset>
        <div>
            <label>FirstName</label>
            <input ref={firstNameInputRef}></input>
            <span></span>
        </div>

        <div>
            <label>LastName</label>
            <input ref={lastNameInputRef}></input>
            <span></span>
        </div>
        </fieldset>

        <fieldset>
        <div>
            <label>SanSkrit</label>
            <input ref={sanInputRef} onFocus={()=>{
              inputOnFocus(sanInputRef);
            }} 
            onChange={()=>{
                inputOnChange(sanInputRef,sanSpanRef);
            }}
            onBlur={()=>{
               inputOnBlur(sanInputRef);
            }}
            ></input>
            <span ref={sanSpanRef}></span>
        </div>

        <div>
            <label>English</label>
            <input ref={engInputRef} onFocus={()=>{
                 inputOnFocus(engInputRef);
            }}
            onChange={()=>{
                inputOnChange(engInputRef,engSpanRef);
            }}
            onBlur={()=>{
                inputOnBlur(engInputRef);
            }}
            ></input>
            <span ref={engSpanRef}></span>
        </div>

        <div>
            <label>Maths 1A</label>
            <input ref={mat1AInputRef} onFocus={()=>{
                inputOnFocus(mat1AInputRef);
            }}
            onChange={()=>{
                inputOnChange(mat1AInputRef,mat1ASpanRef);
            }}
            onBlur={()=>{
                inputOnBlur(mat1AInputRef);   
                     }}
            ></input>
            <span ref={mat1ASpanRef}></span>
        </div>

        <div>
            <label>Maths 1B</label>
            <input ref={mat1BInputRef}
            onFocus={()=>{
                inputOnFocus(mat1BInputRef);
            }}
            onChange={()=>{
                inputOnChange(mat1BInputRef,mat1BSpanRef);
            }}
            onBlur={()=>{
                inputOnBlur(mat1BInputRef);      
            }}
            ></input>
            <span ref={mat1BSpanRef}></span>
        </div>

        <div>
            <label>Physics</label>
            <input ref={phyInputRef}
            OnFocus={()=>{
                inputOnFocus(phyInputRef);
            }}
            onChange={()=>{
                inputOnChange(phyInputRef,phySpanRef);
            }}
            OnBlur={()=>{
                inputOnBlur(phyInputRef);
            }}
            ></input>
            <span ref={phySpanRef}></span>
        </div>

        <div>
            <label>Chemistry</label>
            <input ref={cheInputRef}
            OnFocus={()=>{
                inputOnFocus(cheInputRef);
            }}
            onChange={()=>{
                inputOnChange(cheInputRef,cheSpanRef);
            }}
            OnBlur={()=>{
                inputOnBlur(cheInputRef);
            }}
            
            ></input>
            <span ref={cheSpanRef}></span>
        </div>
        </fieldset>
        </fieldset>
        <div>
            <button type='button' class="button-name" onClick={()=>{
                let firstName=firstNameInputRef.current.value;
                let lastName=lastNameInputRef.current.value;
                let sanMarks=Number(sanInputRef.current.value);
                let engMarks=Number(engInputRef.current.value);
                let mat1AMarks=Number(mat1AInputRef.current.value);
                let mat1BMarks=Number(mat1BInputRef.current.value);
                let phyMarks=Number(phyInputRef.current.value);
                let cheMarks=Number(cheInputRef.current.value);

                let totalMarks=sanMarks+engMarks+mat1AMarks+mat1BMarks+phyMarks+cheMarks;

                let perc=(totalMarks/600)*100;

                resultPara.current.innerHTML=`${firstName} ${lastName} has scored ${totalMarks} with the percentage of ${perc.toFixed(2)}%`;
            }} >Calculate</button>
        </div>

        <p ref={resultPara}>Tap on Calculate to show the Result</p>
      </form>
    </div>
  )
}

export default MarkSheet
