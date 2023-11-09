import { MenuItem } from "../types";
import { routes } from "constants/routing";
import {
  ZORO_DISCORD_URL,
  ZORO_GITHUB_URL,
  ZORO_SUBSTACK_URL,
  ZORO_TWITTER_URL,
  ZORO_GITBOOK_URL,
  ZORO_LIQUIDATOR_URL,
} from "constants/urls";
import { useAuth } from "context/AuthContext";
import { useMemo } from "react";
import { getContractAddress, isFeatureEnabled } from "utilities";

const MAIN_POOL_COMPTROLLER_ADDRESS = getContractAddress("comptroller");

const useGetMenuItems = () => {
  const { accountAddress } = useAuth();

  return useMemo(() => {
    const menuItems: MenuItem[] = [
      {
        href: routes.dashboard.path,
        // Translation key: do not remove this comment
        // t('layout.menuItems.dashboard')
        i18nKey: "layout.menuItems.dashboard",
        icon: "dashboard",
      },
    ];

    // Insert account page if wallet is connected
    if (accountAddress) {
      menuItems.push({
        href: routes.account.path,
        // Translation key: do not remove this comment
        // t('layout.menuItems.account')
        i18nKey: "layout.menuItems.account",
        icon: "person",
      });
    }

    // Add Pools or Markets page depending on isolated pools feature flag
    menuItems.push(
      isFeatureEnabled("isolatedPools")
        ? {
            href: routes?.pools?.path,
            // Translation key: do not remove this comment
            // t('layout.menuItems.pools')
            i18nKey: "layout.menuItems.pools",
            icon: "market",
          }
        : {
            href: routes.markets.path.replace(
              ":poolComptrollerAddress",
              MAIN_POOL_COMPTROLLER_ADDRESS
            ),
            // Translation key: do not remove this comment
            // t('layout.menuItems.markets')
            i18nKey: "layout.menuItems.markets",
            icon: "market",
          }
    );
    menuItems.push({
      href: ZORO_LIQUIDATOR_URL,
      // Translation key: do not remove this comment
      // t('layout.menuItems.discord')
      i18nKey: "layout.menuItems.liquidator",
      icon: "discord",
      svgIcon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1150_1866)">
            <path
              d="M12.3216 17.6783H10.7144C10.5154 17.6783 10.3247 17.5993 10.184 17.4586C10.0434 17.318 9.96436 17.1272 9.96436 16.9283C9.96436 16.7294 10.0434 16.5386 10.184 16.3979C10.3247 16.2573 10.5154 16.1783 10.7144 16.1783H12.3216C12.3762 16.175 12.4275 16.1511 12.465 16.1113C12.5025 16.0715 12.5234 16.0188 12.5234 15.9642C12.5234 15.9095 12.5025 15.8568 12.465 15.817C12.4275 15.7772 12.3762 15.7533 12.3216 15.75H11.6781C11.2297 15.7406 10.8028 15.5559 10.489 15.2355C10.1752 14.9151 9.99946 14.4844 9.99946 14.0359C9.99946 13.5874 10.1752 13.1568 10.489 12.8363C10.8028 12.5159 11.2297 12.3312 11.6781 12.3218H13.2854C13.4843 12.3218 13.675 12.4008 13.8157 12.5414C13.9563 12.6821 14.0354 12.8729 14.0354 13.0718C14.0354 13.2707 13.9563 13.4615 13.8157 13.6021C13.675 13.7428 13.4843 13.8218 13.2854 13.8218H11.6774C11.6228 13.825 11.5715 13.849 11.5339 13.8888C11.4964 13.9286 11.4755 13.9812 11.4755 14.0359C11.4755 14.0906 11.4964 14.1432 11.5339 14.183C11.5715 14.2228 11.6228 14.2468 11.6774 14.25H12.3209C12.7693 14.2594 13.1961 14.4441 13.5099 14.7646C13.8238 15.085 13.9995 15.5156 13.9995 15.9642C13.9995 16.4127 13.8238 16.8433 13.5099 17.1637C13.1961 17.4842 12.7693 17.6689 12.3209 17.6783H12.3216Z"
              fill="#979692"
            />
            <path
              d="M12 13.8217C11.8011 13.8217 11.6103 13.7427 11.4697 13.6021C11.329 13.4614 11.25 13.2706 11.25 13.0717V12.4282C11.25 12.2293 11.329 12.0385 11.4697 11.8979C11.6103 11.7572 11.8011 11.6782 12 11.6782C12.1989 11.6782 12.3897 11.7572 12.5303 11.8979C12.671 12.0385 12.75 12.2293 12.75 12.4282V13.0717C12.75 13.2706 12.671 13.4614 12.5303 13.6021C12.3897 13.7427 12.1989 13.8217 12 13.8217ZM12 18.3217C11.8011 18.3217 11.6103 18.2427 11.4697 18.1021C11.329 17.9614 11.25 17.7706 11.25 17.5717V16.9282C11.25 16.7293 11.329 16.5385 11.4697 16.3979C11.6103 16.2572 11.8011 16.1782 12 16.1782C12.1989 16.1782 12.3897 16.2572 12.5303 16.3979C12.671 16.5385 12.75 16.7293 12.75 16.9282V17.5717C12.75 17.7706 12.671 17.9614 12.5303 18.1021C12.3897 18.2427 12.1989 18.3217 12 18.3217Z"
              fill="#979692"
            />
            <path
              d="M11.9999 22.5C10.1787 22.4657 8.44539 21.7106 7.18005 20.4003C5.91471 19.0899 5.2206 17.3313 5.24992 15.51C5.24992 11.8553 10.8359 6.24376 11.4734 5.61601C11.6137 5.47769 11.8029 5.40015 11.9999 5.40015C12.197 5.40015 12.3861 5.47769 12.5264 5.61601C13.1639 6.24376 18.7499 11.856 18.7499 15.51C18.7792 17.3313 18.0851 19.0899 16.8198 20.4003C15.5544 21.7106 13.8211 22.4657 11.9999 22.5ZM11.9999 7.22026C10.1594 9.14476 6.74992 13.1895 6.74992 15.51C6.72053 16.9335 7.25658 18.3107 8.24063 19.3397C9.22469 20.3687 10.5765 20.9658 11.9999 21C13.4233 20.9658 14.7751 20.3687 15.7592 19.3397C16.7433 18.3107 17.2793 16.9335 17.2499 15.51C17.2499 13.1865 13.8412 9.14401 11.9999 7.22026Z"
              fill="#979692"
            />
            <path
              d="M17.5642 18.5925C17.3699 18.5908 17.1839 18.5138 17.0452 18.3777C16.9066 18.2416 16.8262 18.057 16.8209 17.8628C16.8157 17.6686 16.886 17.4799 17.0171 17.3365C17.1482 17.1931 17.3298 17.1062 17.5237 17.094C18.897 16.9892 20.1779 16.3625 21.1034 15.3425C22.0289 14.3226 22.5287 12.9869 22.4999 11.61C22.4999 9.28724 19.0934 5.24699 17.2522 3.32249C15.951 4.67828 14.7591 6.13481 13.6874 7.67849C13.575 7.83986 13.4037 7.95059 13.2103 7.98684C13.017 8.02309 12.8172 7.98195 12.6539 7.87228C12.4907 7.76261 12.377 7.5932 12.3374 7.40053C12.2979 7.20786 12.3356 7.00737 12.4424 6.84224C13.7157 5.01056 15.1486 3.29512 16.7242 1.71599C16.8645 1.57789 17.0535 1.50049 17.2503 1.50049C17.4472 1.50049 17.6362 1.57789 17.7764 1.71599C18.4132 2.34299 23.9999 7.95149 23.9999 11.61C24.0288 13.3705 23.3822 15.0752 22.193 16.3738C21.0039 17.6723 19.3625 18.466 17.6062 18.5917L17.5642 18.5925ZM6.4357 18.5925L6.3937 18.5917C4.63743 18.466 2.99604 17.6723 1.80687 16.3738C0.617703 15.0752 -0.0289012 13.3705 -5.10748e-05 11.61C-5.10748e-05 7.95149 5.58745 2.34299 6.22345 1.71599C6.36375 1.57789 6.55271 1.50049 6.74957 1.50049C6.94643 1.50049 7.1354 1.57789 7.2757 1.71599C8.85133 3.29512 10.2842 5.01056 11.5574 6.84224C11.6643 7.00737 11.702 7.20786 11.6625 7.40053C11.6229 7.5932 11.5092 7.76261 11.346 7.87228C11.1827 7.98195 10.9829 8.02309 10.7896 7.98684C10.5962 7.95059 10.4249 7.83986 10.3124 7.67849C9.24085 6.13481 8.04888 4.67828 6.7477 3.32249C4.90645 5.24699 1.49995 9.28724 1.49995 11.61C1.47142 12.9868 1.97123 14.3223 2.89672 15.3421C3.8222 16.3618 5.10307 16.9885 6.4762 17.0932C6.67279 17.1018 6.85814 17.1873 6.9923 17.3312C7.12645 17.4752 7.19865 17.6661 7.19334 17.8628C7.18802 18.0595 7.10562 18.2462 6.96389 18.3827C6.82216 18.5192 6.63246 18.5946 6.4357 18.5925Z"
              fill="#979692"
            />
          </g>
          <defs>
            <clipPath id="clip0_1150_1866">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      target: false,
    });
    menuItems.push(
      {
        href: ZORO_GITBOOK_URL,
        // Translation key: do not remove this comment
        // t('layout.menuItems.gitbook')
        i18nKey: "layout.menuItems.gitbook",
        icon: "gitbook",
        target: true,
      },
      {
        href: ZORO_DISCORD_URL,
        // Translation key: do not remove this comment
        // t('layout.menuItems.discord')
        i18nKey: "layout.menuItems.discord",
        icon: "discord",
        target: true,
      }
    );

    menuItems
      .push
      // {
      // href: routes.vaults.path,
      // // Translation key: do not remove this comment
      // // t('layout.menuItems.vaults')
      // i18nKey: 'layout.menuItems.vaults',
      // icon: 'vault',
      // },
      // {
      // href: routes.swap.path,
      // // Translation key: do not remove this comment
      // // t('layout.menuItems.swap')
      // i18nKey: 'layout.menuItems.swap',
      // icon: 'convert',
      // },
      //{
      //href: routes.history.path,
      //// Translation key: do not remove this comment
      //// t('layout.menuItems.history')
      //i18nKey: 'layout.menuItems.history',
      //icon: 'history',
      //},
      // {
      // href: routes.governance.path,
      // // Translation key: do not remove this comment
      // // t('layout.menuItems.governance')
      // i18nKey: 'layout.menuItems.governance',
      // icon: 'vote',
      // },
      // {
      // href: routes.xvs.path,
      // // Translation key: do not remove this comment
      // // t('layout.menuItems.xvs')
      // i18nKey: 'layout.menuItems.xvs',
      // icon: 'xvsOutlined',
      // },
      // {
      // href: routes.vai.path,
      // // Translation key: do not remove this comment
      // // t('layout.menuItems.vai')
      // i18nKey: 'layout.menuItems.vai',
      // icon: 'vaiOutline',
      // },
      // {
      // href: routes.convertVrt.path,
      // // Translation key: do not remove this comment
      // // t('layout.menuItems.convertVrt')
      // // t('layout.menuItems.convertVrtTitle')
      // i18nKey: 'layout.menuItems.convertVrt',
      // icon: 'convert',
      // },

      // {
      // href: 'https://prdt.finance/Application/Pro/BSC?partnerCode=Zoro',
      // // Translation key: do not remove this comment
      // // t('layout.menuItems.predictions')
      // i18nKey: 'layout.menuItems.predictions',
      // icon: 'predictions',
      // },
      ();

    return menuItems;
  }, [accountAddress]);
};

export default useGetMenuItems;
