"use client";
import Image from "next/image";
import { ModeToggle } from "./Modetoggle";
import { useAccount } from "wagmi";
import { Button } from "./ui/button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { truncateAddress } from "@/lib/utils";
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { useState } from "react";

export default function Nav() {
  const { isConnected, address } = useAccount();
  const { open } = useWeb3Modal();
  const [useDynamic, setUseDynamic] = useState(false);

  const handleConnect = () => {
    if (useDynamic) {
      // Dynamic will handle the connection
    } else {
      open();
    }
  };

  return (
    <header className="">
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <Image
              src="/hederaLogo.png"
              alt="Hedera Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </li>

          <li>
            <div className="flex items-center gap-3">
              {!isConnected ? (
                <>
                  <Button onClick={handleConnect}>
                    {useDynamic ? "Connect with Dynamic" : "Connect with Web3Modal"}
                  </Button>
                  <Button onClick={() => setUseDynamic(!useDynamic)}>
                    Switch to {useDynamic ? "Web3Modal" : "Dynamic"}
                  </Button>
                </>
              ) : (
                <p>{truncateAddress(address)}</p>
              )}
              <ModeToggle />
            </div>
          </li>
        </ul>
      </nav>
      {useDynamic && (
        <DynamicContextProvider
          settings={{
            environmentId: '22dd702a-3182-4ed3-9657-f5ac506e342a',
            walletConnectors: [EthereumWalletConnectors],
          }}
        >
          <DynamicWidget />
        </DynamicContextProvider>
      )}
    </header>
  );
}
