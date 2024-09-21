
<!-- TITLE -->
<h2 align="center">Bitlayer Starter Kit</h2>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The Bitlayer Starter Kit helps developers quickly build decentralized applications (dApps) on the Bitlayer blockchain. It includes essential tools and configurations for full-stack development.

## Built With

- [Bitlayer](https://www.bitlayer.org/)
- [Solidity](https://docs.soliditylang.org/)
- [Next.js](https://nextjs.org/)
- [Foundry](https://book.getfoundry.sh/)
- [WalletConnect](https://walletconnect.com/)
- [WAGMI](https://wagmi.sh/)
- [ShadCN](https://shadcn.dev/)

<!-- PREREQUISITES -->
## Prerequisites

- Node.js
- Git
- Foundry

<!-- INSTALLATION -->
## Installation

### Contract Setup

```bash
cd contract
yarn
```

### Frontend Setup

1. Copy environment variables:

```bash
cp .env.example .env.local
```

2. Update `.env.local` with your WalletConnect project ID.

3. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

For any questions, please contact us at [Bitlayer Developers Community](https://t.me/+oqkpw7Sqm3U1NGNl).
