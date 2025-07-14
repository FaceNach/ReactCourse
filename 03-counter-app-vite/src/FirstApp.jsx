import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

    return (
        <>
            <h1>{ title }</h1>
            <h2>{subTitle}</h2>
            <h2>{name}</h2>
        </>)
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
}
