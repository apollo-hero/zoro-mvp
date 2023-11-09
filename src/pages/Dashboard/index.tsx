/** @jsxImportSource @emotion/react */
import alertImg from "./../../assets/img/alert.png";
import ConnectWalletBanner from "./ConnectWalletBanner";
import { useStyles } from "./styles";
import TEST_IDS from "./testIds";
import useFormatPools from "./useFormatPools";
import { useGetPools } from "clients/api";
import {
  ButtonGroup,
  NoticeWarning,
  Tag,
  TagGroup,
  TextField,
  TokenAnnouncement,
  Tooltip,
} from "components";
import { TOKENS } from "constants/tokens";
import { MarketTable, MarketTableProps } from "containers/MarketTable";
import { useAuth } from "context/AuthContext";
import { useHideXlDownCss, useShowXlDownCss } from "hooks/responsive";
import React, { InputHTMLAttributes, useMemo, useState } from "react";
import { useTranslation } from "translation";
import { Pool } from "types";
import { isFeatureEnabled } from "utilities";

interface DashboardUiProps {
  searchValue: string;
  onSearchInputChange: (newValue: string) => void;
  pools: Pool[];
  isFetchingPools?: boolean;
}

export const DashboardUi: React.FC<DashboardUiProps> = ({
  pools,
  isFetchingPools,
  searchValue,
  onSearchInputChange,
}) => {
  const { t } = useTranslation();
  const styles = useStyles();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedPoolTagIndex, setSelectedPoolTagIndex] = useState<number>(0);

  const showXlDownCss = useShowXlDownCss();
  const hideXlDownCss = useHideXlDownCss();

  const handleSearchInputChange: InputHTMLAttributes<HTMLInputElement>["onChange"] =
    (changeEvent) => onSearchInputChange(changeEvent.currentTarget.value);

  const formattedPools = useFormatPools({
    pools,
    searchValue,
    selectedPoolIndex: selectedPoolTagIndex - 1,
  });

  const poolTags: Tag[] = useMemo(
    () =>
      [
        {
          id: "all",
          content: t("dashboard.allTag"),
        },
      ].concat(
        pools.map((pool) => ({
          id: pool.comptrollerAddress,
          content: pool.name,
        }))
      ),
    [pools]
  );

  const supplyMarketTableProps: MarketTableProps = {
    pools: formattedPools,
    isFetching: isFetchingPools,
    marketType: "supply",
    breakpoint: "lg",
    columns: isFeatureEnabled("isolatedPools")
      ? ["asset", "supplyApyLtv", "pool", "collateral"]
      : ["asset", "supplyApyLtv", "userWalletBalance", "collateral"],
    initialOrder: {
      orderBy: "supplyApyLtv",
      orderDirection: "desc",
    },
  };

  const borrowMarketTableProps: MarketTableProps = {
    pools: formattedPools,
    isFetching: isFetchingPools,
    marketType: "borrow",
    breakpoint: "lg",
    columns: isFeatureEnabled("isolatedPools")
      ? ["asset", "borrowApy", "pool", "liquidity"]
      : ["asset", "borrowApy", "userWalletBalance", "liquidity"],
    initialOrder: {
      orderBy: "borrowApy",
      orderDirection: "asc",
    },
  };

  //<NoticeWarning css={styles.banner} description={t('dashboard.banner.borrowApyChange')} />

  //<TokenAnnouncement css={styles.banner} token={MAINNET_TOKENS.tusdold} />
  return (
    <>
      <ConnectWalletBanner />

      <div css={styles.header}>
        <div className="d-align-space-between all-markets-main-wrap d-align-gap">
          <h4>Core Pool</h4>
          <Tooltip
            title={
              <>
                <div className="tooltip-details-wrap">
                  {/* <div className="d-align">
                    <h4>Core pools are risky</h4>
                    <img src={alertImg} />
                  </div> */}
                  <p>
                    Assets in isolated pools cannot be used as collateral. When
                    you borrow an isolated asset, you cannot borrow other
                    assets. Isolated pools should be considered particularly
                    risky. As always, remember that margin is a decentralized
                    protocol and all deposited funds are at risk.
                  </p>
                </div>
              </>
            }
            arrow
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1251_102)">
                  <path
                    d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34874 20.9425 6.80691 19.0678 4.93219C17.1931 3.05746 14.6513 2.00295 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C19.9976 14.121 19.1539 16.1544 17.6542 17.6542C16.1544 19.1539 14.121 19.9976 12 20ZM12 11.5C11.7348 11.5 11.4804 11.6054 11.2929 11.7929C11.1054 11.9804 11 12.2348 11 12.5V15.5C11 15.7652 11.1054 16.0196 11.2929 16.2071C11.4804 16.3946 11.7348 16.5 12 16.5C12.2652 16.5 12.5196 16.3946 12.7071 16.2071C12.8946 16.0196 13 15.7652 13 15.5V12.5C13 12.2348 12.8946 11.9804 12.7071 11.7929C12.5196 11.6054 12.2652 11.5 12 11.5ZM12 7.5C11.7528 7.5 11.5111 7.57331 11.3055 7.71066C11.1 7.84801 10.9398 8.04324 10.8452 8.27165C10.7505 8.50005 10.7258 8.75139 10.774 8.99386C10.8223 9.23634 10.9413 9.45907 11.1161 9.63388C11.2909 9.8087 11.5137 9.92775 11.7561 9.97598C11.9986 10.0242 12.25 9.99946 12.4784 9.90485C12.7068 9.81024 12.902 9.65002 13.0393 9.44446C13.1767 9.2389 13.25 8.99723 13.25 8.75C13.25 8.41848 13.1183 8.10054 12.8839 7.86612C12.6495 7.6317 12.3315 7.5 12 7.5Z"
                    fill="#919196"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1251_102">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </Tooltip>
          <div className="search-data">
            <TextField
              css={[styles.tabletSearchTextField, showXlDownCss]}
              isSmall
              value={searchValue}
              onChange={handleSearchInputChange}
              placeholder={
                isFeatureEnabled("isolatedPools")
                  ? t("dashboard.searchInput.placeholderIsolatedPools")
                  : t("dashboard.searchInput.placeholder")
              }
              leftIconSrc="magnifier"
              variant="secondary"
            />
          </div>
          <div css={styles.headerBottomRow}>
            {isFeatureEnabled("isolatedPools") && pools.length > 0 && (
              <TagGroup
                css={styles.tags}
                tags={poolTags}
                activeTagIndex={selectedPoolTagIndex}
                onTagClick={setSelectedPoolTagIndex}
              />
            )}

            <div css={styles.rightColumn} className="searchbar-wrap">
              <TextField
                css={[styles.desktopSearchTextField, hideXlDownCss]}
                isSmall
                value={searchValue}
                onChange={handleSearchInputChange}
                placeholder={
                  isFeatureEnabled("isolatedPools")
                    ? t("dashboard.searchInput.placeholderIsolatedPools")
                    : t("dashboard.searchInput.placeholder")
                }
                leftIconSrc="magnifier"
                variant="secondary"
              />
            </div>
          </div>
        </div>
        {console.log({ activeTabIndex })}
        <div className="tabing-btn-wrap">
          {!isFeatureEnabled("isolatedPools") && (
            <ButtonGroup
              css={[styles.tabletButtonGroup, showXlDownCss]}
              fullWidth
              buttonLabels={[
                t("dashboard.supplyTabTitle"),
                t("dashboard.borrowTabTitle"),
              ]}
              activeButtonIndex={activeTabIndex}
              onButtonClick={setActiveTabIndex}
              buttonClassName={`custom-btn-swap`}
            />
          )}
        </div>
      </div>

      {isFeatureEnabled("isolatedPools") ? (
        <MarketTable
          pools={formattedPools}
          isFetching={isFetchingPools}
          breakpoint="lg"
          columns={[
            "asset",
            "pool",
            "userWalletBalance",
            "labeledSupplyApyLtv",
            "labeledBorrowApy",
            "liquidity",
          ]}
          marketType="supply"
          initialOrder={{
            orderBy: "userWalletBalance",
            orderDirection: "desc",
          }}
          testId={TEST_IDS.marketTable}
          key="dashboard-market-table"
        />
      ) : (
        <>
          <div
            css={[styles.desktopMarketTables, hideXlDownCss]}
            className="markets-table-grid"
          >
            <MarketTable
              {...supplyMarketTableProps}
              title={t("dashboard.supplyMarketTableTitle")}
              testId={TEST_IDS.supplyMarketTable}
            />

            <MarketTable
              {...borrowMarketTableProps}
              title={t("dashboard.borrowMarketTableTitle")}
              testId={TEST_IDS.borrowMarketTable}
            />
          </div>

          <div css={showXlDownCss}>
            {activeTabIndex === 0 ? (
              <MarketTable
                {...supplyMarketTableProps}
                key="dashboard-supply-market-table"
              />
            ) : (
              <MarketTable
                {...borrowMarketTableProps}
                key="dashboard-borrow-market-table"
              />
            )}
          </div>
        </>
      )}

      <div css={styles.header} className={"mt-space-30"}>
        <div className="d-align-space-between all-markets-main-wrap d-align-gap w-max-content">
          <h4>Isolated Pool</h4>
          <Tooltip
            title={
              <>
                <div className="tooltip-details-wrap">
                  <div className="d-align">
                    <h4>Isolated pools are risky</h4>
                    <img src={alertImg} />
                  </div>
                  <p>
                    Assets in isolated pools cannot be used as collateral. When
                    you borrow an isolated asset, you cannot borrow other
                    assets. Isolated pools should be considered particularly
                    risky. As always, remember that margin is a decentralized
                    protocol and all deposited funds are at risk.
                  </p>
                </div>
              </>
            }
            arrow
          >
            {/* <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1251_102)">
                  <path
                    d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34874 20.9425 6.80691 19.0678 4.93219C17.1931 3.05746 14.6513 2.00295 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C19.9976 14.121 19.1539 16.1544 17.6542 17.6542C16.1544 19.1539 14.121 19.9976 12 20ZM12 11.5C11.7348 11.5 11.4804 11.6054 11.2929 11.7929C11.1054 11.9804 11 12.2348 11 12.5V15.5C11 15.7652 11.1054 16.0196 11.2929 16.2071C11.4804 16.3946 11.7348 16.5 12 16.5C12.2652 16.5 12.5196 16.3946 12.7071 16.2071C12.8946 16.0196 13 15.7652 13 15.5V12.5C13 12.2348 12.8946 11.9804 12.7071 11.7929C12.5196 11.6054 12.2652 11.5 12 11.5ZM12 7.5C11.7528 7.5 11.5111 7.57331 11.3055 7.71066C11.1 7.84801 10.9398 8.04324 10.8452 8.27165C10.7505 8.50005 10.7258 8.75139 10.774 8.99386C10.8223 9.23634 10.9413 9.45907 11.1161 9.63388C11.2909 9.8087 11.5137 9.92775 11.7561 9.97598C11.9986 10.0242 12.25 9.99946 12.4784 9.90485C12.7068 9.81024 12.902 9.65002 13.0393 9.44446C13.1767 9.2389 13.25 8.99723 13.25 8.75C13.25 8.41848 13.1183 8.10054 12.8839 7.86612C12.6495 7.6317 12.3315 7.5 12 7.5Z"
                    fill="#919196"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1251_102">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span> */}
            <img src={alertImg} />
          </Tooltip>
        </div>
      </div>
      {isFeatureEnabled("isolatedPools") ? (
        <MarketTable
          pools={formattedPools}
          isFetching={isFetchingPools}
          breakpoint="lg"
          columns={[
            "asset",
            "pool",
            "userWalletBalance",
            "labeledSupplyApyLtv",
            "labeledBorrowApy",
            "liquidity",
          ]}
          marketType="supply"
          initialOrder={{
            orderBy: "userWalletBalance",
            orderDirection: "desc",
          }}
          testId={TEST_IDS.marketTable}
          key="dashboard-market-table"
        />
      ) : (
        <>
          <div
            css={[styles.desktopMarketTables, hideXlDownCss]}
            className="markets-table-grid"
          >
            <MarketTable
              {...supplyMarketTableProps}
              title={t("dashboard.supplyMarketTableTitle")}
              testId={TEST_IDS.supplyMarketTable}
            />

            <MarketTable
              {...borrowMarketTableProps}
              title={t("dashboard.borrowMarketTableTitle")}
              testId={TEST_IDS.borrowMarketTable}
            />
          </div>

          <div css={showXlDownCss}>
            {activeTabIndex === 0 ? (
              <MarketTable
                {...supplyMarketTableProps}
                key="dashboard-supply-market-table"
              />
            ) : (
              <MarketTable
                {...borrowMarketTableProps}
                key="dashboard-borrow-market-table"
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

const Dashboard: React.FC = () => {
  const { accountAddress } = useAuth();

  const [searchValue, setSearchValue] = useState("");

  const { data: getPoolData, isLoading: isGetPoolsLoading } = useGetPools({
    accountAddress,
  });

  return (
    <DashboardUi
      pools={getPoolData?.pools || []}
      isFetchingPools={isGetPoolsLoading}
      searchValue={searchValue}
      onSearchInputChange={setSearchValue}
    />
  );
};

export default Dashboard;
