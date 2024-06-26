import messengerIcon from "/assets/messenger.svg"
import discordIcon from "/assets/discord.svg"
import linkedinIcon from "/assets/Linkedin.svg"
import youtubeIcon from "/assets/youtube.svg"

const BottomBanner = () => {
  return (
    <div className="bg_greenWh p-5">
      <div className="container">
        <h1 className="text-center txtW_s mb-4">
          Here could be your advertisement
        </h1>
        <div className="d-flex justify-content-around row">
          <img src={messengerIcon} className="col-sm-3 p-3" />
          <img src={discordIcon} className="col-sm-3 p-3" />
          <img src={linkedinIcon} className="col-sm-3 p-3" />
          <img src={youtubeIcon} className="col-sm-3 p-3" />
        </div>
      </div>
    </div>
  )
}

export default BottomBanner
