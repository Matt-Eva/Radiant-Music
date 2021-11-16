

const MerchCard = () => {
    return (
        <div className="merchcard">
            <img src="https://e7.pngegg.com/pngimages/272/208/png-clipart-adventure-time-jake-illustration-jake-the-dog-roblox-finn-the-human-drawing-adventure-time-video-game-smiley.png"/>
            <h4 style={{margin: "0px"}}>Header</h4>
            <p>Details/Price</p>
            <button>Add to Cart</button>
            <form>
                <input type="number" className="add-stock"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MerchCard;