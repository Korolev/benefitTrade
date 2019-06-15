import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './menu.css'

class MenuItem extends Component {
  static propTypes = {}

  render() {
    const { link, children } = this.props
    return (
      <div class="nav-elem">
        {this.icon}
        <NavLink to={link} activeStyle={{ color: 'red' }}>
          {children}
        </NavLink>
      </div>
    )
  }

  get icon() {
    switch (this.props.icon) {
      case 'profile':
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.81118 6.11115C6.81118 4.34914 8.23806 2.92226 10.0001 2.92226C11.7621 2.92226 13.189 4.34914 13.189 6.11115C13.189 7.87316 11.7621 9.30004 10.0001 9.30004C8.23806 9.30004 6.81118 7.87316 6.81118 6.11115ZM2.92229 14.8611C2.92229 14.4717 3.11181 14.0788 3.54729 13.6769C3.98752 13.2706 4.63079 12.9041 5.39805 12.5967C6.9337 11.9815 8.78966 11.6723 10.0001 11.6723C11.2105 11.6723 13.0664 11.9815 14.6021 12.5967C15.3693 12.9041 16.0126 13.2706 16.4528 13.6769C16.8883 14.0788 17.0778 14.4717 17.0778 14.8611V17.0778H2.92229V14.8611Z"
              stroke="#C2CFE0"
              strokeWidth="1.4"
            />
          </svg>
        )
      case 'buyers':
        return (
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.49996 1.2H15.6666C15.7384 1.2 15.8 1.2616 15.8 1.33333V6.33333C15.8 6.40507 15.7384 6.46667 15.6666 6.46667H1.49996C1.42823 6.46667 1.36663 6.40507 1.36663 6.33333V1.33333C1.36663 1.2616 1.42823 1.2 1.49996 1.2ZM1.49996 9.53333H15.6666C15.7384 9.53333 15.8 9.59493 15.8 9.66667V14.6667C15.8 14.7384 15.7384 14.8 15.6666 14.8H1.49996C1.42823 14.8 1.36663 14.7384 1.36663 14.6667V9.66667C1.36663 9.59493 1.42823 9.53333 1.49996 9.53333Z"
              stroke="#C2CFE0"
              strokeWidth="1.4"
            />
          </svg>
        )
      case 'notification':
        return (
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3 14V14.2899L13.505 14.495L15.3 16.29V16.3H0.7V16.2899L2.49497 14.495L2.7 14.2899V14V9C2.7 6.16412 4.17906 3.94929 6.66139 3.36114L7.2 3.23353V2.68V2C7.2 1.5566 7.5566 1.2 8 1.2C8.4434 1.2 8.8 1.5566 8.8 2V2.68V3.23308L9.33808 3.36102C11.8114 3.94907 13.3 6.17474 13.3 9V14ZM9.0932 18.7C8.861 19.0599 8.45646 19.3 8 19.3C7.53817 19.3 7.13468 19.0603 6.90423 18.7H9.0932Z"
              stroke="#C2CFE0"
              strokeWidth="1.4"
            />
          </svg>
        )
      case 'orders':
        return (
          <svg
            width="17"
            height="18"
            class="orders"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 15.9342V8.38058L15.4286 6.04018V12.4286L9 15.9342ZM8.35714 7.24554L1.34598 4.6942L8.35714 2.14286L15.3683 4.6942L8.35714 7.24554ZM16.7143 4.71429C16.7143 4.17188 16.3728 3.68973 15.8705 3.50893L8.79911 0.937499C8.65848 0.887276 8.50781 0.857142 8.35714 0.857142C8.20647 0.857142 8.0558 0.887276 7.91518 0.937499L0.84375 3.50893C0.341518 3.68973 0 4.17188 0 4.71429V12.4286C0 12.9007 0.261161 13.3326 0.672991 13.5536L7.74442 17.4107C7.93527 17.5212 8.14621 17.5714 8.35714 17.5714C8.56808 17.5714 8.77902 17.5212 8.96987 17.4107L16.0413 13.5536C16.4531 13.3326 16.7143 12.9007 16.7143 12.4286V4.71429Z"
              stroke="#C2CFE0"
              fill="#C2CFE0"
            />
          </svg>
        )
      case 'find-buyer':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 8.13333C1.33431 8.13333 1.2 7.99902 1.2 7.83333V1.5C1.2 1.33431 1.33431 1.2 1.5 1.2H6.16667C6.33235 1.2 6.46667 1.33431 6.46667 1.5V7.83333C6.46667 7.99902 6.33235 8.13333 6.16667 8.13333H1.5ZM1.5 14.8C1.33431 14.8 1.2 14.6657 1.2 14.5V11.5C1.2 11.3343 1.33431 11.2 1.5 11.2H6.16667C6.33235 11.2 6.46667 11.3343 6.46667 11.5V14.5C6.46667 14.6657 6.33235 14.8 6.16667 14.8H1.5ZM9.83333 14.8C9.66765 14.8 9.53333 14.6657 9.53333 14.5V8.16667C9.53333 8.00098 9.66765 7.86667 9.83333 7.86667H14.5C14.6657 7.86667 14.8 8.00098 14.8 8.16667V14.5C14.8 14.6657 14.6657 14.8 14.5 14.8H9.83333ZM9.53333 1.5C9.53333 1.33431 9.66765 1.2 9.83333 1.2H14.5C14.6657 1.2 14.8 1.33431 14.8 1.5V4.5C14.8 4.66569 14.6657 4.8 14.5 4.8H9.83333C9.66765 4.8 9.53333 4.66569 9.53333 4.5V1.5Z"
              stroke="#C2CFE0"
              strokeWidth="1.4"
            />
          </svg>
        )
      case 'more':
        return (
          <svg
            width="14"
            height="4"
            viewBox="0 0 14 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00004 0.333328C1.08337 0.333328 0.333374 1.08333 0.333374 1.99999C0.333374 2.91666 1.08337 3.66666 2.00004 3.66666C2.91671 3.66666 3.66671 2.91666 3.66671 1.99999C3.66671 1.08333 2.91671 0.333328 2.00004 0.333328ZM12 0.333328C11.0834 0.333328 10.3334 1.08333 10.3334 1.99999C10.3334 2.91666 11.0834 3.66666 12 3.66666C12.9167 3.66666 13.6667 2.91666 13.6667 1.99999C13.6667 1.08333 12.9167 0.333328 12 0.333328ZM7.00004 0.333328C6.08337 0.333328 5.33337 1.08333 5.33337 1.99999C5.33337 2.91666 6.08337 3.66666 7.00004 3.66666C7.91671 3.66666 8.66671 2.91666 8.66671 1.99999C8.66671 1.08333 7.91671 0.333328 7.00004 0.333328Z"
              fill="#C2CFE0"
              stroke="#C2CFE0"
            />
          </svg>
        )
      default:
        return ''
    }
  }
}

export default MenuItem
