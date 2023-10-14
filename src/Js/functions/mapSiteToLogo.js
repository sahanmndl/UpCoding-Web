import atcoderLogo from "../../assets/atcoder.png";
import codechefLogo from "../../assets/codechef.png";
import codeforcesLogo from "../../assets/codeforces.png";
import csacademyLogo from "../../assets/csacademy.png";
import googleLogo from "../../assets/google.png";
import hackerearthLogo from "../../assets/hackerearth.png";
import hackerrankLogo from "../../assets/hackerrank.png";
import leetcodeLogo from "../../assets/leetcode.png";
import topcoderLogo from "../../assets/topcoder.png";
import placeholderLogo from "../../assets/placeholder.png";

export const mapSiteToLogo = (site) =>{
    return site === "CodeChef"
    ? codechefLogo
    : site === "CodeForces"
      ? codeforcesLogo
      : site === "AtCoder"
        ? atcoderLogo
        : site === "TopCoder"
          ? topcoderLogo
          : site === "HackerRank"
            ? hackerrankLogo
            : site === "HackerEarth"
              ? hackerearthLogo
              : site === "LeetCode"
                ? leetcodeLogo
                : site === "Kick Start"
                  ? googleLogo
                  : site === "CS Academy"
                    ? csacademyLogo
                    : placeholderLogo
}