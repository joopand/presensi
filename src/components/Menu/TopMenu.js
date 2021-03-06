import React from 'react'
import { Link } from 'react-router'

class TopMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {openMenu: false}
  }

  openMenu () {
    console.log('hi')
    console.log(this.state.openMenu)
    if (this.state.openMenu) {
      this.setState({openMenu: false})
    } else {
      this.setState({openMenu: true})
    }
  }

  componentDidMount () {
    $(function() {
      $('.nav-open' ).removeClass()
      var $toggle = $('.navbar-toggle')
      $toggle.click(function() {
        setTimeout(function(){
            $('.navbar-toggle').addClass('toggled');
        }, 430)
        var $layer = $('<div class="close-layer"></div>')
        $layer.appendTo(".main-panel")


        setTimeout(function(){
            $layer.addClass('visible')
        }, 100)

        $layer.click(function() {
            $('html').removeClass('nav-open')
            // mobile_menu_visible = 0

            $layer.removeClass('visible')

             setTimeout(function(){
                $layer.remove()
                $toggle.removeClass('toggled')

             }, 400)
        })
        $('html').addClass('nav-open')

      })
    })
  }
  render () {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li className={'dropdown dropdown-with-icons' + (this.state.openMenu ? ' open' : '')}>
                <Link to='/logout' className='btn btn-fill btn-warning btn-wd text-danger'>
                  <i className='pe-7s-close-circle'></i>
                    Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      // <div className='ui stackable menu'>
      //   <div className='ui container'>
      //     <a className='item'>
      //       <i className='home icon'></i> Home
      //     </a>
      //
      //     <div className='right item'>
      //       Logged in as
      //       <div className='ui simple inline dropdown item'>
      //         <div className='text'>
      //           Nama
      //         </div>
      //         <i className='dropdown icon'></i>
      //         <div className='menu'>
      //           <a className='item'>
      //             <i className='sign out icon'>
      //             </i>Logout
      //           </a>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default TopMenu
