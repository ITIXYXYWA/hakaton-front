import React from "react";
import './error.css';
import { Header } from "../header/header";
import { Container } from "../container/container";
import CrossImg from '../../assets/img/error.svg'

export const Error = () => {
  return (
    <>
      <Header noActive />
      <Container>
        <svg className='error-img' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M52.4105 0H48.5474V64H52.4105C58.7848 64 64 58.7847 64 52.4105V11.5895C64 5.21525 58.7848 0 52.4105 0Z" fill="#E0230D" />
          <path d="M60.1369 11.5895V52.4104C60.1369 58.7846 54.9216 63.9999 48.5474 63.9999H11.5895C5.21525 64 0 58.7847 0 52.4105V11.5895C0 5.21525 5.21525 0 11.5895 0H48.5472C54.9215 0 60.1369 5.21525 60.1369 11.5895Z" fill="#FF5440" />
          <path d="M14.4869 46.2938C10.7236 46.2938 7.66187 43.2322 7.66187 39.4688C7.66187 38.402 8.52674 37.5372 9.59349 37.5372C10.6602 37.5372 11.5251 38.402 11.5251 39.4688C11.5251 41.102 12.8537 42.4305 14.4869 42.4305C16.12 42.4305 17.4486 41.102 17.4486 39.4688V36.8933C17.4486 35.26 16.12 33.9315 14.4869 33.9315C10.7236 33.9315 7.66187 30.8699 7.66187 27.1066V24.5311C7.66187 20.7677 10.7236 17.7061 14.4869 17.7061C18.2501 17.7061 21.3119 20.7677 21.3119 24.5311C21.3119 25.5978 20.447 26.4627 19.3802 26.4627C18.3135 26.4627 17.4486 25.5978 17.4486 24.5311C17.4486 22.8978 16.12 21.5693 14.4869 21.5693C12.8537 21.5693 11.5251 22.8978 11.5251 24.5311V27.1066C11.5251 28.7398 12.8537 30.0683 14.4869 30.0683C18.2501 30.0683 21.3119 33.1299 21.3119 36.8933V39.4688C21.3119 43.2323 18.2501 46.2938 14.4869 46.2938Z" fill="white" />
          <path d="M49.5131 46.2938C45.7497 46.2938 42.6881 43.2322 42.6881 39.4688C42.6881 38.402 43.553 37.5372 44.6197 37.5372C45.6865 37.5372 46.5514 38.402 46.5514 39.4688C46.5514 41.102 47.8799 42.4305 49.5131 42.4305C51.1464 42.4305 52.4749 41.102 52.4749 39.4688V36.8933C52.4749 35.26 51.1464 33.9315 49.5131 33.9315C45.7497 33.9315 42.6881 30.8699 42.6881 27.1066V24.5311C42.6881 20.7677 45.7497 17.7061 49.5131 17.7061C53.2765 17.7061 56.3381 20.7677 56.3381 24.5311C56.3381 25.5978 55.4732 26.4627 54.4065 26.4627C53.3397 26.4627 52.4749 25.5978 52.4749 24.5311C52.4749 22.8978 51.1464 21.5693 49.5131 21.5693C47.8799 21.5693 46.5514 22.8978 46.5514 24.5311V27.1066C46.5514 28.7398 47.8799 30.0683 49.5131 30.0683C53.2765 30.0683 56.3381 33.1299 56.3381 36.8933V39.4688C56.338 43.2323 53.2765 46.2938 49.5131 46.2938Z" fill="white" />
          <path d="M32 46.2947C28.2368 46.2947 25.175 43.233 25.175 39.4697V24.532C25.175 20.7687 28.2368 17.707 32 17.707C35.7634 17.707 38.8251 20.7687 38.8251 24.532V39.4697C38.8251 43.2332 35.7634 46.2947 32 46.2947ZM32 21.5703C30.3669 21.5703 29.0383 22.8988 29.0383 24.532V39.4697C29.0383 41.1029 30.3669 42.4314 32 42.4314C33.6333 42.4314 34.9618 41.1029 34.9618 39.4697V24.532C34.9618 22.8989 33.6333 21.5703 32 21.5703Z" fill="white" />
        </svg>

        <h1 className='error-title'>Упсс.... Не все проверки прошли успешно!</h1>

        <div className="error-content">
          <span className="file">Файл: Устав.pdf</span>
          <span className='error'>
            <img src={CrossImg} className='error-icon' alt="" />
            Отсутствует презентация компании
          </span>
          <a href="/?" className="go-back go-back--error">
            <span className='go-back-arrow'>
              <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM43 7L1 7V9L43 9V7Z" fill="#C0C0C0" />
              </svg>
            </span>
            <span className='go-back-text'>вернуться назад</span>
          </a>
        </div>

      </Container>
    </>
  )
}