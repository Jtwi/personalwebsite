import Head from 'next/head'
import Image from 'next/image'
import { Fade } from "react-awesome-reveal";


export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>JTWI</title>
        <meta name="description" content="Jordan Twiggs Personal Website" />
        <meta name="keywords" content="" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

    <main className="leading-relaxedtracking-normal bg-cover h-screen w-screen bg-gray-900 items-center ">
      <div className="container md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <Fade delay={200}>
          <h1 className="my-4 text-6xl md:text-7xl opacity-100 font-bold leading-relaxed text-center md:text-left mb-4 md:mb-10 pt-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r md:px-0 from-sky-500 via-blue-500 to-sky-500">Jordan Twiggs</span>
          </h1>
          </Fade>
          <Fade delay={400}>
          <p className="leading-relaxed text-white font-medium text-2xl md:text-3xl md:mb-8 mb-4 text-center md:text-left md:px-0 px-6">
          When I was 17 I started design and development work for a hand full of local businesses. Five years later I now focus on Business Development and Management, Marketing and Frontend Development for worldwide businesses. 
          </p>
          </Fade>
          <div className="flex md:flex-row justify-center">
          <Fade delay={400}>
            <div className="">
            <a className="inline-block text-sky-500 no-underline hover:text-blue-500 hover:text-underline text-center h-10 p-2 md:h-auto transform hover:scale-125 duration-200 ease-in-out" href="https://twitter.com/_jtwi">
              <svg className="fill-current h-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
                ></path>
              </svg>
            </a>
            </div>
            <div>
            <a className="inline-block text-sky-500 no-underline hover:text-blue-500 hover:text-underline text-center h-10 p-3 md:h-auto  transform hover:scale-125 duration-200 ease-in-out" href="https://www.linkedin.com/in/jordan-twiggs-21a67b207/">
              <svg className="fill-current h-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            </div>
            <div>
            <a className="inline-block text-sky-500 no-underline hover:text-blue-500 hover:text-underline text-center h-10 p-3  md:h-auto  transform hover:scale-125 duration-200 ease-in-out" href="mailto:hello@jtwi.me">
              <svg className="fill-current h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
              </svg>
            </a>
            </div>
            <div>
            <a className="inline-block text-sky-500 no-underline hover:text-blue-500 hover:text-underline text-center h-10 p-3  md:h-auto  transform hover:scale-125 duration-200 ease-in-out" href="https://drive.google.com/file/d/1mG26tx2WXjIGv5mk9qTjzioeJ5iTAgkx/view?usp=sharing">
              <svg className="fill-current h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/>
              </svg>
            </a>
            </div>
            </Fade>
            </div>
          </div>

        
        <div className="xl:w-3/5 w-5/5 overflow-hidden pl-20 opacity-95 justify-center">
        <Fade delay={400}>
        <Image eager src={'/pngmoji.png'} width={'750'} height={'750'} alt="Nest Pro"/>
        </Fade>
        </div>

      </div>

  </main>


    </>
  )
}
