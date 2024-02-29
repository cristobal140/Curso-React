// const newmesage = {
//     message:'Hola mundo',
//     title:'Fernando'
// };

// const GetResult = () => {   
//     return 4+4;
// }

import PropTypes from 'prop-types';

export const FirstApp= ({title, subTitle, name}) => {

    // console.log(props);
        return (//functional component
            //fragment:
            <>
                {/* <h1> {GetResult()} </h1> */}
                <h1>{ title }</h1>
                {/* <code>{ JSON.stringify(newmesage)}</code> */}
                <p>{subTitle}</p>
                <p>{name}</p>
                
            </>
        )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}
//default props entran antes que los propTypes
FirstApp.defaultProps ={
    name: 'Fernando',
    subTitle: 123,
    title: 'No hay titulo'
}