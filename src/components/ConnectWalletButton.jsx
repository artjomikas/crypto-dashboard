import { ConnectButton } from "@rainbow-me/rainbowkit";
import { CgChevronDown } from "react-icons/cg";
import React from "react";

const ConnectWalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <div className="mr-5 mt-2">
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="text-white bg-gradient-to-r from-[#AC6AEC] to-[#BB7FF5] px-7 py-2.5 rounded-lg transition-transform hover:scale-105 duration-100 ease-out focus:ring focus:ring-violet-300"
                    >
                      <p className="text-sm font-semibold font-inter">
                        Connect Wallet
                      </p>
                    </button>
                  </div>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div className="flex mr-5 mt-2">
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  ></button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    class="flex text-white font-inter bg-gradient-to-r font-semibold shadow-[0_0px_7px_2px_#4b3561] from-[#AC6AEC] to-[#BB7FF5] hover:bg-gradient-to-t hover:bg-[#AC6AEC] focus:ring focus:ring-violet-300  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:scale-105 transition duration-100 ease-out"
                  >
                    
                    <p className="tracking-wide">{account.displayName}</p>
                    <CgChevronDown className='scale-[1.6] ml-2 mt-[2px]'/>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWalletButton;
