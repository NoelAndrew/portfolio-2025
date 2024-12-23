import { FaAngular, FaGithub, FaReact } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const SkillsCarrousell = () => {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        x-ref="logos"
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
        </li>
        <li>
          <FaGithub className="text-black text-xl" />
        </li>
        <li>
          <FaReact className="text-black text-xl" />
        </li>
        <li>
          <IoLogoIonic className="text-black text-xl" />
        </li>
        <li>
          <FaAngular className="text-black text-xl" />
        </li>
        <li>
        <RiTailwindCssFill className="text-black text-xl" />

        </li>
      </ul>
    </div>
  );
};
export default SkillsCarrousell;
