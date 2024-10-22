import { FaLocationArrow } from 'react-icons/fa6';

import { socialMedia } from '@/common/data';

import MagicButton from './MagicButton';

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20" id="contact">
      {/* background grid */}
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          准备好让<span className="text-yellow"> 你的 </span>
          数字化信息生活能否提升到新的水平？
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          现在就联系我们，让我们讨论一下如何帮助您实现您的目标。
        </p>
        <a href="mailto:s5460703@gmail.com">
          <MagicButton
            title="和我们联络"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          版权所有 © 2024 Harmony 和谐
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
