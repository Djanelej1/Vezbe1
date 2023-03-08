import {loremIpsum, LoremIpsum} from 'react-lorem-ipsum'

const Loremfunct = ()=>{
    return (
        
        <ul>
           
       {loremIpsum({p:6}).map((text) => {
        
                    return <li className="paragrafName"key={text}><LoremIpsum p={1} avgSentencesPerParagraph={1} avgWordsPerSentence ={2} startWithLoremIpsum={false} random={true}/>
                    <p className ="para"><LoremIpsum p={1} avgSentencesPerParagraph={1} avgWordsPerSentence ={10} startWithLoremIpsum={false} random={true}/></p></li> 
                    })}
 
            </ul>
           
    )
    }




export default Loremfunct;