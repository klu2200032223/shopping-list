const Footer = ({items}) => {
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = (numPacked / numItems) * 100;

    return (
        <div className="footerWrapper">
            {percentage === 100 ? "Shopping done" :
                `Total Items: ${numItems} --- Completed Items: ${numPacked} -- ${percentage}%`}
        </div>
    );
};

export default Footer;
