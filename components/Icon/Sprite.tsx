import React from 'react'

export const Sprite: React.FC = () => {
  return (
    <div
      className='svg-sprite'
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{
        __html: `
<svg width="0" height="0" class="hidden">
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="favorite">
    <path xmlns="http://www.w3.org/2000/svg" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
  </symbol> 
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="favorite_filled">
    <path xmlns="http://www.w3.org/2000/svg" d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z"/>
  </symbol> 
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="arrow_drop_down">
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M7 10l5 5 5-5H7z"></path>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="location">
    <path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
    <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="location_filled">
    <circle cx="256" cy="192" r="32"/>
    <path d="M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0051.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"/>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="user">
    <path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="phone">
    <path xmlns="http://www.w3.org/2000/svg" d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="24"/>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="cart">
    <circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"/><path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="image">
    <rect xmlns="http://www.w3.org/2000/svg" x="48" y="80" width="416" height="352" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/>
    <circle xmlns="http://www.w3.org/2000/svg" cx="336" cy="176" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/>
    <path xmlns="http://www.w3.org/2000/svg" d="M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0143.11-2L464 368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/> 
  </symbol>  
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="back_arrow">
    <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="close">
    <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 75" id="novaposhta">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.924 22.2049C61.1539 22.1326 61.4565 22.2772 61.759 22.6748C61.759 22.6748 61.759 22.6748 75.4335 36.0001C76.2322 36.7953 76.2322 38.0001 75.4335 38.5905C75.4335 38.5905 75.4335 38.5905 61.759 52.1206C61.4565 52.5182 61.1539 52.6146 60.924 52.4941C60.6941 52.3736 60.5489 52.0242 60.5489 51.5182V23.0724C60.5489 22.5784 60.6941 22.2772 60.924 22.2049Z"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5322 0H38.5003L39.4321 0.385544C39.4321 0.385544 39.4321 0.385543 53.5059 14.3133C54.111 15.1084 53.9053 15.7108 52.9009 15.7108C52.9009 15.7108 52.9009 15.7108 47.068 15.7108C46.0636 15.7108 45.2649 16.506 45.2649 17.506C45.2649 17.506 45.2649 17.506 45.2649 27.8434C45.2649 28.8434 44.4541 29.6386 43.244 29.6386C43.244 29.6386 43.244 29.6386 32.9942 29.6386C31.9898 29.6386 31.179 28.8434 31.179 27.8434C31.179 27.8434 31.179 27.8434 31.179 17.506C31.179 16.506 30.3803 15.7108 29.3638 15.7108H23.1316C22.1272 15.7108 21.9215 15.1084 22.5266 14.3133C22.5266 14.3133 22.5266 14.3133 36.6125 0.385544L37.5322 0V0Z"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4836 21.9035C15.7377 22.024 15.8951 22.3734 15.8951 22.8794V51.9156C15.8951 52.4216 15.7377 52.7228 15.4836 52.8192C15.2416 52.9156 14.8907 52.8192 14.4792 52.518C14.4792 52.518 14.4792 52.518 0.599015 38.5903C-0.199672 37.9999 -0.199672 36.7951 0.599015 35.9999C0.599015 35.9999 0.599016 35.9999 14.4792 22.277C14.8907 21.8794 15.2416 21.783 15.4836 21.9035Z"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.9942 44.759C32.9942 44.759 32.9942 44.759 43.244 44.759C44.4541 44.759 45.2649 45.5542 45.2649 46.5542C45.2649 46.5542 45.2649 46.5542 45.2649 57.494C45.2649 58.6867 46.0636 59.4819 47.068 59.4819H52.5015C53.5059 59.4819 53.9053 60.0723 53.1066 60.6747C53.1066 60.6747 53.1066 60.6747 39.4321 74.3976C39.0207 74.7952 38.5245 75 38.0162 75C37.5201 75 37.0118 74.7952 36.6125 74.3976C36.6125 74.3976 36.6125 74.3976 22.938 60.6747C22.1272 60.0723 22.5266 59.4819 23.531 59.4819C23.531 59.4819 23.531 59.4819 29.3638 59.4819C30.3803 59.4819 31.179 58.6867 31.179 57.494C31.179 57.494 31.179 57.494 31.179 46.5542C31.179 45.5542 31.9898 44.759 32.9942 44.759V44.759Z"></path>
  </symbol>
  <!-- 
    Social icons
  -->
  <symbol aria-hidden="true" data-prefix="fab" data-icon="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="twitter">
    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
  </symbol>
  <symbol aria-hidden="true" data-prefix="fab" data-icon="youtube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" id="youtube">
    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
  </symbol>
  <symbol aria-hidden="true" data-prefix="fab" data-icon="linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="linkedin">
    <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
  </symbol>
  <symbol aria-hidden="true" data-prefix="fab" data-icon="whatsapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="whatsapp">
    <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
  </symbol>
  <symbol aria-hidden="true" data-prefix="fab" data-icon="facebook-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="facebook">
    <path fill="currentColor" d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0048-48V80a48 48 0 00-48-48z"></path>
  </symbol>
  <symbol aria-hidden="true" data-prefix="fab" data-icon="telegram-plane" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="instagram">
    <path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
  </symbol>
  <symbol aria-hidden="true" data-prefix="fab" data-icon="instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="telegram">
    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
  </symbol>
  <symbol aria-hidden="true" data-prefix="fab" data-icon="tiktok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="tiktok">
    <path fill="currentColor" d="M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11185 188.31v89.89a74.62 74.62 0 1052.23 71.18V0h88a121.18 121.18 0 001.86 22.17A122.18 122.18 0 00381 102.39a121.43 121.43 0 0067 20.14z"></path>
  </symbol>
  <symbol aria-hidden="true" data-prefix="fab" data-icon="pinterest" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" id="pinterest">
    <path fill="currentColor" d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
  </symbol>
  <symbol aria-hidden="true" data-prefix="fas" data-icon="at" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="email">
    <path fill="currentColor" d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 00-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"></path>
  </symbol>
  <symbol aria-hidden="true" data-prefix="fab" data-icon="viber" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="viber">
    <path fill="currentColor" d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"></path>
  </symbol>
</svg>
  `,
      }}
    />
  )
}

export default Sprite

export const viewBox = {
  favorite: '0 0 512 512',
  favorite_filled: '0 0 512 512',
  arrow_drop_down: '0 0 24 24',
  location: '0 0 512 512',
  location_filled: '0 0 512 512',
  user: '0 0 512 512',
  phone: '0 0 512 512',
  cart: '0 0 512 512',
  image: '0 0 512 512',
  back_arrow: '0 0 512 512',
  close: '0 0 512 512',
  novaposhta: '0 0 77 75',

  twitter: '0 0 512 512',
  youtube: '0 0 576 512',
  linkedin: '0 0 448 512',
  whatsapp: '0 0 448 512',
  facebook: '0 0 448 512',
  instagram: '0 0 448 512',
  telegram: '0 0 448 512',
  tiktok: '0 0 448 512',
  pinterest: '0 0 496 512',
  email: '0 0 512 512',
  viber: '0 0 512 512',
}
