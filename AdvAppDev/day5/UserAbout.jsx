import UserNavbar from "./UserNavbar"
import UserFooter from "./UserFooter"
const UserAbout = () => {
  return (
    <>
    <div className="u-about">
      <header>
        <UserNavbar />
      </header>
      <main>
        <div className='about-countainer'>
          <div className='about-home-top'>
            <h2 style={{ textAlign: 'center' }}>About</h2>

          </div>
        </div>
      </main>
      <footer>
        <UserFooter />
      </footer>
    </div>
  </>
  )
}

export default UserAbout
