/** @jsxImportSource @emotion/react */
import TosPPModal from ".";
import { useStyles } from "./styles";
import { ModalProps } from "components";
import React from "react";
import { useTranslation } from "translation";
import { SecondaryButton } from "../Button";
export interface TosModalProps {
  title: string;
  open: boolean;
  handleClose: ModalProps["handleClose"];
}

const TosModal: React.FC<TosModalProps> = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <TosPPModal
      isOpen={open}
      handleClose={handleClose}
      title={t("tos.header")}
      css={styles.tosModal}
      disableEscapeKeyDown={true}
    >
      <div css={styles.tosContent} className="tosContent">
        <ol>
          <li>
            <strong> Welcome to zoroprotocol.com and the Interface!</strong>
          </li>
        </ol>
        <p>
          <span>
            These Terms of Use ("Terms") govern your access to and use of both
            the zoroprotocol.com website (referred to as "zoroprotocol.com"),
            app.zoroprotocol.com and liquidate.zoroprotocol.com interface
            (referred to as the &ldquo;Interface") collectively referred to as
            the "Services." The Services are brought to you by Zoro Labs ("we,"
            "us," or "our").
          </span>
        </p>
        <p>
          <span>
            Zoroprotocol.com provides information and resources about the
            fundamentals of the decentralized non-custodial liquidity protocol
            called the Zoro Protocol, comprised of open-source self-executing
            smart contracts that are deployed on various permissionless public
            blockchains, such as ZkSync Era(the "Zoro Protocol" or the
            "Protocol"). Zoro Labs does not control or operate any version of
            the Zoro Protocol on any blockchain network.
          </span>
        </p>
        <p>
          <span>
            The Interface, which is hosted on IPFS, is an independent interface
            providing one of the available applications through which users, via
            their self-custodial wallets, interact with the Zoro Protocol.
          </span>
        </p>
        <p>
          <span>
            ARBITRATION NOTICE: THESE TERMS CONTAIN AN ARBITRATION CLAUSE BELOW.
            EXCEPT FOR CERTAIN TYPES OF DISPUTES MENTIONED IN THAT ARBITRATION
            CLAUSE, YOU AND WE AGREE THAT ANY DISPUTES RELATING TO THE SERVICES
            (AS DEFINED BELOW) WILL BE RESOLVED BY MANDATORY BINDING
            ARBITRATION, AND YOU WAIVE ANY RIGHT TO A TRIAL BY JURY OR TO
            PARTICIPATE IN A CLASS-ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
          </span>
        </p>
        <p>
          <span>You are entering into a binding Agreement.</span>
        </p>
        <p>
          <span>
            BY ACCESSING OR USING OUR SERVICES, WHICH INCLUDE OUR VARIOUS
            WEBSITES, INCLUDING, WITHOUT LIMITATION, ZOROPROTOCOL.COM AND
            APP.ZOROPROTOCOL.COM (AND ANY RESPECTIVE SUBDOMAINS); APPLICATIONS,
            AND OTHER SERVICES THAT LINK TO THESE TERMS, AS WELL AS ANY
            INFORMATION, TEXT, LINKS, GRAPHICS, PHOTOS, AUDIO, VIDEO, OR OTHER
            MATERIALS STORED, RETRIEVED OR APPEARING THEREON, WHETHER ACCESSED
            THROUGH THE SITE OR OTHERWISE (COLLECTIVELY, THE
            &ldquo;SERVICES&rdquo;), YOU ARE ENTERING INTO A BINDING AGREEMENT
            WITH US THAT INCLUDES THESE TERMS, PRIVACY POLICY (FOUND HERE), AND
            OTHER POLICIES REFERENCED HEREIN (COLLECTIVELY, THE
            &ldquo;AGREEMENT&rdquo;).
          </span>
        </p>
        <p>
          <span>
            To the extent that there is a conflict between these Terms and any
            applicable additional terms, these Terms will control unless
            expressly stated otherwise. If you don't agree with these Terms, you
            may not use the Services and should not visit the Site or otherwise
            engage with the Services.
          </span>
        </p>
        <p>
          <strong>Use of the Services</strong>
        </p>
        <p>
          <span>
            To use the Services, you must legally be able to enter into the
            Agreement. By using the Services, you represent and warrant that you
            meet the eligibility requirement. If you do not meet the
            requirement, you must not access or use the Site or the Services.
          </span>
        </p>
        <p>
          <strong>We may update the Services and the Terms.</strong>
        </p>
        <p>
          <span>
            We may change or update the Services, the Agreement, and any part of
            the Terms at any time, for any reason, at our sole discretion. Once
            any part of the Agreement is updated and in effect, you will be
            bound by the Terms if you continue to use the Services. We may, at
            any time, and without liability to you, modify or discontinue all or
            part of the Services (including access to the Services via any
            third-party links).
          </span>
        </p>
        <p>
          <strong>Restricted Jurisdictions</strong>
        </p>
        <p>
          <span>
            By accessing or using our Service, you agree that you are solely and
            entirely responsible for
          </span>
        </p>
        <p>
          <span>
            compliance with all laws and regulations that may apply to you. You
            may not use our Service
          </span>
        </p>
        <p>
          <span>
            if you are a citizen, resident, or member of any jurisdiction or
            group that is subject to
          </span>
        </p>
        <p>
          <span>
            economic sanctions by the country or region, or if your use of the
            Services would be illegal
          </span>
        </p>
        <p>
          <span>or otherwise violate any applicable law.</span>
        </p>
        <p>
          <span>
            You further represent that you are not (a) the subject of economic
            or trade sanctions administered or enforced by any governmental
            authority or otherwise designated on any list of prohibited or
            restricted parties or (b) (including but not limited to the
            following) a citizen, resident, or organization of the Chinese
            Mainland, Taiwan (province of China), Hong Kong (SAR of China), the
            United States and Singapore.
          </span>
        </p>
        <p>&nbsp;</p>
        <ol start="2">
          <li>
            <strong> Services</strong>
          </li>
        </ol>
        <p>
          <strong>
            Zoroprotocol.com is an informational resource about the Protocol;
            however, it is not the exclusive or sole source.
          </strong>
        </p>
        <p>
          <span>
            All information provided in connection with your access and use of
            the Services is intended for informational purposes only. While we
            strive to provide accurate and reliable information, we cannot
            guarantee the accuracy, completeness, or timeliness of the
            information provided. It is possible that the information may be
            outdated or subject to errors or omissions. The codebases of all the
            versions of the Zoro Protocol are maintained on each full network
            node of the relevant blockchain. You should not take, or refrain
            from taking, any action based on any information contained on
            zoroprotocol.com, including, without limitation, the
            docs.zoroprotocol.com ("Documentation") or any other information
            that we make available at any time, including blog posts, data,
            articles, links to third-party content, discord content, news feeds,
            tutorials, tweets, and videos. You further acknowledge and agree
            that we will not be responsible or liable, directly or indirectly,
            for any damage or loss caused or alleged to be caused by or in
            connection with the use of or reliance on any such content, goods,
            or services available on or through any such site or resource.
          </span>
        </p>
        <p>
          <strong>Users retain full control over their cryptoassets.</strong>
        </p>
        <p>
          <span>
            It is important to understand that neither we nor any affiliated
            entity is a party to any transaction on the blockchain networks
            underlying the Zoro Protocol; we do not have possession, custody or
            control over any cryptoassets, or any user&rsquo;s funds. You
            understand that when you interact with Zoro Protocol, you retain
            control over your cryptoassets at all times.
          </span>
        </p>
        <p>
          <strong>
            Users use third-party self-custodial wallets to interact with the
            Zoro Protocol; we have no control or guarantee over the wallets.
          </strong>
        </p>
        <p>
          <span>
            To interact with the Zoro Protocol using the Interface, you will
            need to connect and engage with it through your self-custodial
            wallet. It's essential to understand that your self-custodial wallet
            is provided by a third-party entity and is generally governed by
            separate terms and conditions set by the respective third-party
            service provider. These terms and conditions may involve additional
            fees, disclaimers, or risk warnings regarding the accuracy and
            reliance on the provided information. Reviewing and comprehending
            the terms and conditions associated with your chosen self-custodial
            wallet provider to ensure compliance and to be aware of any
            applicable charges or risks is your sole responsibility.
          </span>
        </p>
        <p>
          <strong>
            We are not intermediaries to the Zoro Protocol transactions.
          </strong>
        </p>
        <p>
          <span>
            Due to the non-custodial and decentralized nature of the technology,
            we are not intermediaries, agents, advisors, or custodians, and we
            do not have a fiduciary relationship or obligation to you regarding
            any other decisions or activities that you affect when using our
            Services.
          </span>
        </p>
        <p>
          <strong>
            We have no information about all Protocol transactions beyond what
            is publicly available via the blockchain.
          </strong>
        </p>
        <p>
          <span>
            You acknowledge that we do not have information regarding all Zoro
            Protocol transactions beyond what is available or obtainable
            publicly via the blockchain. However, we may collect information
            regarding the users of the Services in accordance with our Privacy
            Policy.
          </span>
        </p>
        <p>
          <strong>There may be associated blockchain fees.</strong>
        </p>
        <p>
          <span>
            Transactions using blockchains may require the payment of gas fees,
            which are essentially network transaction fees paid on every
            transaction that occurs on the selected blockchain network. Please
            note that gas fees are non-refundable. We do not provide any
            services to users or deliver, hold, and/or receive payment for
            cryptoassets. We do not receive any fees for any transactions or the
            Services.
          </span>
        </p>
        <p>
          <strong css={styles.red}>
            You understand that the Interface is hosted on a decentralized
            infrastructure for storing and accessing data and content, IPFS.
          </strong>
        </p>
        <p>
          <span>
            The Interface is hosted on the InterPlanetary File System ("IPFS"),
            a decentralized and distributed network protocol allowing for the
            storage and retrieval of files in a peer-to-peer manner, utilizing a
            distributed network of computers rather than relying on a central
            server. This means that the Interface's files are not stored in a
            single location but are instead spread across multiple nodes within
            the IPFS network.
          </span>
        </p>
        <p>&nbsp;</p>
        <ol start="3">
          <li>
            <strong> Assumption of Risk</strong>
          </li>
        </ol>
        <p>
          <strong>
            You assume the risks of engaging in novel and experimental
            technology.
          </strong>
        </p>
        <p>
          <span>
            Technologies such as smart contracts on various blockchains,
            cryptographic tokens generated by the smart contracts, and other
            nascent software, applications, and systems that interact with
            blockchain-based networks are experimental, speculative, inherently
            risky, and subject to change. Among other risks, bugs, malfunctions,
            cyberattacks, or changes to the applicable blockchain (e.g., forks)
            could disrupt these technologies and even result in a total loss of
            cryptoassets, their market value, or digital funds. We assume no
            liability or responsibility for any such risks. If you are not
            comfortable assuming these risks, you should not access or engage in
            transactions using blockchain-based technology.
          </span>
        </p>
        <p>
          <strong>
            We are not liable for any third-party services or links.
          </strong>
        </p>
        <p>
          <span>
            We are not responsible for the content or services of any
            third-party, including, without limitation, any network or apps like
            Discord or MetaMask, and we make no representations regarding the
            content or accuracy of any third-party services or materials. The
            use and access of any third-party products or services, including
            through the Services, are at your own risk. Please note that we do
            not have control over third-party services. Consequently, we cannot
            guarantee, endorse, or recommend such content or services to users
            of the Interface, nor can we endorse their use for any specific
            purpose.
          </span>
        </p>
        <p>
          <strong>
            You agree to the automated collection and disbursement of proceeds
            by smart contracts.
          </strong>
        </p>
        <p>
          <span>
            You acknowledge and agree that all transactions accessed through the
            blockchain-based networks will be automatically processed using one
            or more smart contracts. By engaging in transactions using the
            Services, you acknowledge and consent to the automatic processing of
            all transactions in connection with using the Services. You further
            acknowledge and agree that the applicable smart contract will
            dictate how the funds of a transaction and ownership of cryptoassets
            are distributed.
          </span>
        </p>
        <p>
          <strong>You acknowledge the risks of using the Services.</strong>
        </p>
        <p>
          <span>
            You bear sole responsibility for evaluating the Services before
            using them, and all transactions on the blockchain are irreversible,
            final, and without refunds. The Services may be disabled, disrupted,
            or adversely impacted as a result of sophisticated cyber-attacks,
            surges in activity, computer viruses, and/or other operational or
            technical challenges, among other things. We disclaim any ongoing
            obligation to notify you of all the potential risks of using and
            accessing our Services. You agree to accept these risks and agree
            that you will not seek to hold any Zoro Labs Indemnified Party
            responsible for any consequent losses.
          </span>
        </p>
        <p>
          <strong>
            You are solely responsible for the security of your self-custodial
            wallet.
          </strong>
        </p>
        <p>
          <span>
            You understand and agree that you are solely responsible for
            maintaining the security of your self-custodial wallet. You alone
            are responsible for securing your private keys. We do not have
            access to your private keys. Any unauthorized access to your
            self-custodial wallet by third parties could result in the loss or
            theft of any cryptoasset or funds held in your account and any
            associated accounts. You understand and agree that we have no
            involvement in, and you will not hold us responsible for managing
            and maintaining the security of your self-custodial wallet. The
            private key associated with the self-custodial wallet address from
            which you transfer cryptoassets or the private key associated is the
            only private key that can control the cryptoassets you transfer into
            the smart contracts.
          </span>
        </p>
        <p>
          <strong>
            We reserve the right to restrict your access from engaging with the
            Services.
          </strong>
        </p>
        <p>
          <span>
            You agree that we have the right to restrict your access to the
            Services via any technically available methods if we suspect, in our
            sole discretion, that (a) you are using the Services for money
            laundering or any illegal activity; (b) you have engaged in
            fraudulent activity; (c) you have acquired cryptoassets using
            inappropriate methods, including the use of stolen funds to purchase
            such assets; (d) you are the target of any sanctions administered or
            enforced by the U.S. Department of the Treasury&rsquo;s Office of
            Foreign Assets Control (&ldquo;OFAC&rdquo;), the United Nations
            Security Council, the European Union, Her Majesty&rsquo;s Treasury,
            or any other legal or regulatory authority in any applicable
            jurisdiction; (e) either you, as an individual or an entity, or your
            wallet address is listed on the Specially Designated Nationals and
            Blocked Persons List (&ldquo;SDN List&rdquo;), Consolidated
            Sanctions List (&ldquo;Non-SDN Lists), or any other sanctions lists
            administered by OFAC; (f) you are located, organized, or resident in
            a country or territory that is, or whose government is, the subject
            of sanctions, including but not limited to C&ocirc;te
            d&rsquo;Ivoire, Cuba, Belarus, Iran, Iraq, Liberia, North Korea,
            Sudan, and Syria; or (g) you have otherwise acted in violation of
            these Terms. If we have a reasonable suspicion that you are
            utilizing the Services for illegal purposes, we reserve the right to
            take whatever action we deem appropriate.
          </span>
        </p>
        <p>
          <strong>
            We do not guarantee the quality or accessibility of the Services.
          </strong>
        </p>
        <p>
          <span>
            As a condition to accessing or using the Services, you acknowledge,
            understand, and agree that from time to time, the Services may be
            inaccessible or inoperable for any reason, including, but not
            limited to equipment malfunctions, periodic maintenance procedures
            or repairs, causes beyond our control or that we could not
            reasonably foresee, disruptions and temporary or permanent
            unavailability of underlying blockchain infrastructure or
            unavailability of third-party service providers or external partners
            for any reason.
          </span>
        </p>
        <p>
          <span>
            You acknowledge and agree that you will access and use the Services
            at your own risk. You should not engage in blockchain-based
            transactions unless it is suitable given your circumstances and
            financial resources. By using the Services, you represent that you
            have been, are, and will be solely responsible for conducting your
            own due diligence into the risks of a transaction and the underlying
            smart contracts and cryptoassets.
          </span>
        </p>
        <p>
          <strong>4.Taxes</strong>
        </p>
        <p>
          <span>You are responsible for your taxes and duties.</span>
        </p>
        <p>
          <span>
            Users bear sole responsibility for paying any and all taxes, duties,
            and assessments now or hereafter claimed or imposed by any
            governmental authority associated with their use of the Services
            and/or payable as a result of using and/or exploiting any
            cryptoassets and interacting with smart contracts. Blockchain-based
            transactions are novel, and their tax treatment is uncertain.
          </span>
        </p>
        <p>&nbsp;</p>
        <ol start="5">
          <li>
            <strong> Ownership</strong>
          </li>
        </ol>
        <p>
          <strong>We grant you a license to use our Services.</strong>
        </p>
        <p>
          <span>
            Contingent upon your ongoing compliance with the Agreement, we grant
            you a personal, worldwide, revocable, non-exclusive, and
            non-assignable license to use the software provided to you as part
            of our Services. The only purpose of this license is to allow you to
            use and enjoy the Services solely as permitted by these Terms.
          </span>
        </p>
        <p>
          <strong>We own all rights in the Services.</strong>
        </p>
        <p>
          <span>
            We own any and all right, title, and interest in and to the
            Services, including, without limitation, any and all copyrights in
            and to any content, code, data, or other materials that you may
            access or use on or through the Services. Except as expressly set
            forth herein, your use of or access to the Services does not grant
            you any ownership or other rights therein.
          </span>
        </p>
        <p>
          <strong>We may use and share your feedback.</strong>
        </p>
        <p>
          <span>
            Any comments, bug reports, ideas, or other feedback that you may
            provide about our Services, including suggestions about how we might
            improve our Services, are entirely voluntary. You agree that we are
            free to use or not use any feedback that we receive from you as we
            see fit, including copying and sharing such feedback with third
            parties, without any obligation to you.
          </span>
        </p>
        <p>
          <strong>6.Prohibited Content</strong>
        </p>
        <p>
          <span>
            You may only use the Services if you comply with this Agreement
            (including, without limitation, these Terms), applicable third-party
            policies, and all applicable laws, rules, regulations, and related
            guidance. The following conduct is prohibited:
          </span>
        </p>
        <p>
          <span>
            Using the Services for, or to promote or facilitate, illegal
            activity (including, without limitation, money laundering, financing
            terrorism, tax evasion, buying or selling illegal drugs, contraband,
            counterfeit goods, or illegal weapons)
          </span>
        </p>
        <p>
          <strong>
            Exploiting the Services for any unauthorized commercial purpose
          </strong>
        </p>
        <p>
          <span>
            Uploading or transmitting viruses, worms, Trojan horses, time bombs,
            cancel bots, spiders, malware, or any other type of malicious code
            that will or may be used in any way that will affect the
            functionality or operation of the Services
          </span>
        </p>
        <p>
          <span>
            Attempting to or actually copying or making unauthorized use of all
            or any portion of the Services, including by attempting to reverse
            compile, reformatting or framing, disassemble, reverse engineer any
            part of the Services
          </span>
        </p>
        <p>
          <strong>
            Harvesting or otherwise collecting information from the Services for
            any unauthorized purpose
          </strong>
        </p>
        <p>
          <strong>
            Using the Services under false or fraudulent pretenses or otherwise
            being deceitful
          </strong>
        </p>
        <p>
          <strong>
            Interfering with other users&rsquo; access to or use of the Services
          </strong>
        </p>
        <p>
          <span>
            Interfering with or circumventing the security features of the
            Services or any third party&rsquo;s systems, networks, or resources
            used in the provision of Services
          </span>
        </p>
        <p>
          <span>
            Engaging in any attack, hack, denial-of-service attack,
            interference, or exploit of any smart contract in connection with
            the use of the Service (and operations performed by a user that are
            technically permitted by a smart contract may nevertheless be a
            violation of our Agreement, including these Terms, and the law)
          </span>
        </p>
        <p>
          <strong>
            Engaging in any anticompetitive behavior or other misconduct
          </strong>
        </p>
        <p>
          <strong>Violating our rules may result in our intervention.</strong>
        </p>
        <p>
          <span>
            You agree and acknowledge that if you use the Services to engage in
            conduct prohibited by applicable law, we permanently reserve the
            right to completely or partially restrict or revoke your access to
            the Services, either completely or for a period of time, at our sole
            discretion. We reserve the right to amend, rectify, edit, or
            otherwise alter transaction data to remediate or mitigate any damage
            caused either to us or to any other person as a result of a
            user&rsquo;s violation of this Agreement or applicable law.
          </span>
        </p>
        <p>
          <span>We reserve the right to investigate violations.</span>
        </p>
        <p>
          <span>
            We reserve the right to investigate and prosecute any suspected
            breaches of this Agreement, including the Terms. We may disclose any
            information as necessary to satisfy any law, regulation, legal
            process, or governmental request.
          </span>
        </p>
        <p>&nbsp;</p>
        <ol start="7">
          <li>
            <strong> Disclaimers and Limitations of Liability</strong>
          </li>
        </ol>
        <p>
          <strong>We make no representations or warranties.</strong>
        </p>
        <p>
          <span>
            THE SERVICES ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE&rdquo; BASIS. WE AND OUR PARENTS, SUBSIDIARIES,
            AFFILIATES, RELATED LABS, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
            REPRESENTATIVES, PARTNERS, AND LICENSORS (COLLECTIVELY, THE
            &ldquo;ZORO LABS INDEMNIFIED PARTIES&rdquo;) MAKE NO GUARANTEES OF
            ANY KIND IN CONNECTION WITH THE SERVICES. TO THE MAXIMUM EXTENT
            PERMITTED UNDER APPLICABLE LAW, ZORO LABS INDEMNIFIED PARTIES
            DISCLAIM ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS OR IMPLIED,
            OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
            NON-INFRINGEMENT AND DISCLAIM ALL RESPONSIBILITY AND LIABILITY FOR:
          </span>
        </p>
        <p>
          <span>
            THE SERVICES BEING ACCURATE, COMPLETE, CURRENT, RELIABLE,
            UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE. INFORMATION
            (INCLUDING, WITHOUT LIMITATION, THE VALUE OR OUTCOME OF ANY
            TRANSACTION) AVAILABLE THROUGH THE SERVICE IS PROVIDED FOR GENERAL
            INFORMATION ONLY AND SHOULD NOT BE RELIED UPON OR USED AS THE SOLE
            BASIS FOR MAKING DECISIONS. ANY RELIANCE ON THE SERVICES IS AT YOUR
            OWN RISK.
          </span>
        </p>
        <p>
          <span>
            INJURY OR DAMAGE RESULTING FROM THE SERVICES. FOR EXAMPLE, YOU
            EXPRESSLY ACKNOWLEDGE, UNDERSTAND, AND AGREE THAT THE SERVICES MAY
            CONTAIN AUDIO-VISUAL EFFECTS, STROBE LIGHTS, OR OTHER MATERIALS THAT
            MAY AFFECT YOUR PHYSICAL SENSES AND/OR PHYSICAL CONDITION. FURTHER,
            YOU EXPRESSLY ACKNOWLEDGE THAT ZORO LABS INDEMNIFIED PARTIES ARE NOT
            RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY ANOTHER USER&rsquo;S
            CONDUCT, UNAUTHORIZED ACTORS, OR ANY UNAUTHORIZED ACCESS TO OR USE
            OF THE SERVICES.
          </span>
        </p>
        <p>
          <span>
            VIRUSES, WORMS, TROJAN HORSES, TIME BOMBS, CANCEL BOTS, SPIDERS,
            MALWARE, OR OTHER TYPE OF MALICIOUS CODE THAT MAY BE USED IN ANY WAY
            TO AFFECT THE FUNCTIONALITY OR OPERATION OF THE SERVICES.
          </span>
        </p>
        <p>
          <strong>Limitation of Liability.</strong>
        </p>
        <p>
          <span>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ANY ZORO
            LABS INDEMNIFIED PARTY BE LIABLE TO YOU FOR ANY LOSS, DAMAGE, OR
            INJURY OF ANY KIND INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
            INCIDENTAL, EXEMPLARY, CONSEQUENTIAL, OR PUNITIVE LOSSES OR DAMAGES,
            OR DAMAGES FOR SYSTEM FAILURE OR MALFUNCTION OR LOSS OF PROFITS,
            DATA, USE, BUSINESS OR GOOD-WILL OR OTHER INTANGIBLE LOSSES, ARISING
            OUT OF OR IN CONNECTION WITH:
          </span>
        </p>
        <p>
          <span>
            THE SERVICES OR YOUR INABILITY TO USE OR ACCESS THE SERVICES
          </span>
        </p>
        <p>
          <span>
            MISUSE OF THE SERVICES (INCLUDING WITHOUT LIMITATION, UNAUTHORIZED
            ACCESS OF THE SERVICES)
          </span>
        </p>
        <p>
          <span>ANY USER CONDUCT ON THE SERVICES</span>
        </p>
        <p>
          <span>
            TERMINATION, SUSPENSION OR RESTRICTION OF ACCESS TO ANY THE SERVICES
          </span>
        </p>
        <p>
          <span>
            IN ADDITION TO THE FOREGOING, NO Zoro Labs INDEMNIFIED PARTY SHALL
            BE LIABLE FOR ANY DAMAGES CAUSED IN WHOLE OR IN PART BY:
          </span>
        </p>
        <p>
          <span>
            USER ERROR, SUCH AS FORGOTTEN PASSWORDS OR INCORRECTLY CONSTRUCTED
            SMART CONTRACTS OR OTHER TRANSACTIONS
          </span>
        </p>
        <p>
          <span>SERVER FAILURE OR DATA LOSS</span>
        </p>
        <p>
          <span>
            THE MALFUNCTION, UNEXPECTED FUNCTION OR UNINTENDED FUNCTION OF THE
            BLOCKCHAIN, ANY COMPUTER OR CRYPTOASSET NETWORK (INCLUDING ANY
            WALLET PROVIDER), INCLUDING WITHOUT LIMITATION LOSSES ASSOCIATED
            WITH NETWORK FORKS, REPLAY ATTACKS, DOUBLE-SPEND ATTACKS, SYBIL
            ATTACKS, 51% ATTACKS, GOVERNANCE DISPUTES, MINING DIFFICULTY,
            CHANGES IN CRYPTOGRAPHY OR CONSENSUS RULES, HACKING, OR
            CYBERSECURITY BREACHES
          </span>
        </p>
        <p>
          <span>ANY CHANGE IN VALUE OF ANY CRYPTOASSET</span>
        </p>
        <p>
          <span>ANY CHANGE IN LAW, REGULATION, OR POLICY</span>
        </p>
        <p>
          <span>EVENTS OF FORCE MAJEURE</span>
        </p>
        <p>
          <span>ANY THIRD PARTY</span>
        </p>
        <p>
          <span>
            THIS LIMITATION OF LIABILITY IS INTENDED TO APPLY WITHOUT REGARD TO
            WHETHER OTHER PROVISIONS OF THESE TERMS HAVE BEEN BREACHED OR HAVE
            PROVEN INEFFECTIVE. THE LIMITATIONS SET FORTH IN THIS SECTION SHALL
            APPLY REGARDLESS OF THE FORM OF ACTION, WHETHER THE ASSERTED
            LIABILITY OR DAMAGES ARE BASED ON CONTRACT, INDEMNIFICATION, TORT,
            STRICT LIABILITY, STATUTE, OR ANY OTHER LEGAL OR EQUITABLE THEORY,
            AND WHETHER OR NOT ZORO LABS INDEMNIFIED PARTIES HAVE BEEN INFORMED
            OF THE POSSIBILITY OF ANY SUCH DAMAGE.
          </span>
        </p>
        <p>
          <span>
            IN NO EVENT WILL THE ZOROLABS INDEMNIFIED PARTIES&rsquo; CUMULATIVE
            LIABILITY TO YOU OR ANY OTHER USER, FROM ALL CAUSES OF ACTION AND
            ALL THEORIES OF LIABILITY EXCEED ONE THOUSAND U.S. DOLLARS (U.S.
            $1,000.00).
          </span>
        </p>
        <p>
          <span>
            UNDER NO CIRCUMSTANCES SHALL ANY ZORO Labs INDEMNIFIED PARTY BE
            REQUIRED TO DELIVER TO YOU ANY VIRTUAL CURRENCY AS DAMAGES, MAKE
            SPECIFIC PERFORMANCE, OR ANY OTHER REMEDY. IF YOU WOULD BASE YOUR
            CALCULATIONS OF DAMAGES IN ANY WAY ON THE VALUE OF VIRTUAL CURRENCY,
            YOU AND WE AGREE THAT THE CALCULATION SHALL BE BASED ON THE LOWEST
            VALUE OF THE VIRTUAL CURRENCY DURING THE PERIOD BETWEEN THE ACCRUAL
            OF THE CLAIM AND THE AWARD OF DAMAGES.
          </span>
        </p>
        <p>
          <span>
            Some jurisdictions do not allow the exclusion or limitation of
            certain warranties and liabilities provided in this section;
            accordingly, some of the above limitations and disclaimers may not
            apply to you. To the extent applicable law does not permit Zoro Labs
            Indemnified Parties to disclaim certain warranties or limit certain
            liabilities, the extent of Zoro Labs Indemnified Parties&rsquo;
            liability and the scope of any such warranties will be as permitted
            under applicable law.
          </span>
        </p>
        <p>&nbsp;</p>
        <ol start="8">
          <li>
            <strong> Indemnification</strong>
          </li>
        </ol>
        <p>
          <span>
            You agree to indemnify, defend, and hold harmless Zoro Labs
            Indemnified Parties from any claim or demand, including reasonable
            attorneys&rsquo; fees, made by any third party due to or arising out
            of:(a)Your breach or alleged breach of the Agreement (including,
            without limitation, these Terms);(b)Anything you contribute to the
            Services;(c)Your misuse of the Services, or any smart contract
            and/or script related thereto(d)Your violation of any laws, rules,
            regulations, codes, statutes, ordinances, or orders of any
            governmental or quasi-governmental authorities;(e)Your violation of
            the rights of any third party, including any intellectual property
            right, publicity, confidentiality, property, or privacy
            right;(f)Your use of a third-party product, service, and/or website;
            or (g) any misrepresentation made by you. We reserve the right to
            assume, at your expense, the exclusive defense and control of any
            matter subject to indemnification by you. You agree to cooperate
            with our defense of any claim. You will not in any event settle any
            claim without our prior written consent.
          </span>
        </p>
        <p>
          <span>
            We reserve the right to assume, at your expense, the exclusive
            defense and control of any matter subject to indemnification by you.
            You agree to cooperate with our defense of any claim. You will not
            in any event settle any claim without our prior written consent.
          </span>
        </p>
        <p>&nbsp;</p>
        <ol start="9">
          <li>
            <strong>
              {" "}
              Arbitration Agreement and Waiver of Rights, Including Class
              Actions
            </strong>
          </li>
        </ol>
        <p>
          <span>
            PLEASE READ THIS SECTION CAREFULLY: IT MAY SIGNIFICANTLY AFFECT YOUR
            LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT AND TO
            HAVE A JURY HEAR YOUR CLAIMS. IT CONTAINS PROCEDURES FOR MANDATORY
            BINDING ARBITRATION AND A CLASS ACTION WAIVER.
          </span>
        </p>
        <p>
          <strong>
            Agreement to Attempt to Resolve Disputes Through Good Faith
            Negotiations
          </strong>
        </p>
        <p>
          <span>
            Prior to commencing any legal proceeding against us of any kind,
            including an arbitration as set forth below, you and we agree that
            we will attempt to resolve any dispute, claim, or controversy
            between us arising out of or relating to the agreement or the
            Services (each, a &ldquo;Dispute&rdquo; and, collectively,
            &ldquo;Disputes&rdquo;) by engaging in good faith negotiations. Such
            good faith negotiations require, at a minimum, that the aggrieved
            party provide a written notice to the other party specifying the
            nature and details of the Dispute. The party receiving such notice
            shall have thirty (30) days to respond to the notice. Within sixty
            (60) days after the aggrieved party sent the initial notice, the
            parties shall meet and confer in good faith by videoconference, or
            by telephone, to try to resolve the Dispute. If the parties are
            unable to resolve the Dispute within ninety (90) days after the
            aggrieved party sent the initial notice, the parties may agree to
            mediate their Dispute, or either party may submit the Dispute to
            arbitration as set forth below.
          </span>
        </p>
        <p>
          <strong>Agreement to Arbitrate</strong>
        </p>
        <p>
          <span>
            You and we agree that any Dispute that cannot be resolved through
            the procedures set forth above will be resolved through binding
            arbitration in accordance with the International Arbitration Rules
            of the International Centre for Dispute Resolution. The place of
            arbitration shall be the Cayman Islands. The language of the
            arbitration shall be English. The arbitrator(s) shall have
            experience adjudicating matters involving Internet technology,
            software applications, financial transactions and, ideally,
            blockchain technology. The arbitrator&rsquo;s award of damages must
            be consistent with the terms of the &ldquo;Limitation of
            Liability&rdquo; subsection of these Terms as to the types and
            amounts of damages for which a party may be held liable. The
            prevailing party will be entitled to an award of their reasonable
            attorney&rsquo;s fees and costs. Except as may be required by law,
            neither a party nor its representatives may disclose the existence,
            content, or results of any arbitration hereunder without the prior
            written consent of (all/both) parties.
          </span>
        </p>
        <p>
          <span>
            UNLESS YOU TIMELY PROVIDE US WITH AN ARBITRATION OPT-OUT NOTICE (AS
            DEFINED BELOW IN THE SUBSECTION TITLED &ldquo;YOUR CHOICES&rdquo;),
            YOU ACKNOWLEDGE AND AGREE THAT YOU AND WE ARE EACH WAIVING THE RIGHT
            TO A TRIAL BY JURY OR TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER
            IN ANY PURPORTED CLASS ACTION OR REPRESENTATIVE PROCEEDING. FURTHER,
            UNLESS BOTH YOU AND WE OTHERWISE AGREE IN WRITING, THE ARBITRATOR
            MAY NOT CONSOLIDATE MORE THAN ONE PERSON&rsquo;S CLAIMS AND MAY NOT
            OTHERWISE PRESIDE OVER ANY FORM OF ANY CLASS OR REPRESENTATIVE
            PROCEEDING.
          </span>
        </p>
        <p>
          <strong>Changes</strong>
        </p>
        <p>
          <span>
            By rejecting any changes to these Terms, you agree that you will
            arbitrate any Dispute between you and us in accordance with the
            provisions of this section as of the date you first accepted these
            Terms (or accepted any subsequent changes to these Terms).
          </span>
        </p>
        <p>&nbsp;</p>
        <ol start="10">
          <li>
            <strong> Waiver of Injunctive or Other Equitable Relief</strong>
          </li>
        </ol>
        <p>
          <span>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOU AGREE THAT YOU WILL NOT
            BE PERMITTED TO OBTAIN AN INJUNCTION OR OTHER EQUITABLE RELIEF OF
            ANY KIND, SUCH AS ANY COURT OR OTHER ACTION THAT MAY INTERFERE WITH
            OR PREVENT THE DEVELOPMENT OR EXPLOITATION OF THE SERVICES, OR ANY
            OTHER WEBSITE, APPLICATION, CONTENT, SUBMISSION, PRODUCT, SERVICE,
            OR INTELLECTUAL PROPERTY OWNED, LICENSED, USED OR CONTROLLED BY ANY
            ZORO LABS INDEMNIFIED PARTY.
          </span>
        </p>
        <p>&nbsp;</p>
        <ol start="11">
          <li>
            <strong> Termination; Cancellation</strong>
          </li>
        </ol>
        <p>
          <span>
            This Agreement is effective unless and until terminated by either
            you or us. You may terminate your Agreement with us at any time by
            ceasing all access to the Services. If, in our sole judgment, you
            fail, or we suspect that you have failed, to comply with any term or
            provision of the Agreement (including without limitation any
            provision of these Terms), we reserve the right to terminate our
            Agreement with you and deny you access to the Services. We further
            reserve the right to restrict your access to the Services or to stop
            providing you with all or a part of the Services at any time and for
            no reason, including, without limitation, if we reasonably believe:
            (a) your use of the Services exposes us to risk or liability; (b)
            you are using the Services for unlawful purposes; or (c) it is not
            commercially viable to continue providing you with our Services. All
            of these are in addition to any other rights and remedies that may
            be available to us, whether in equity or at law, all of which we
            expressly reserve.
          </span>
        </p>
        <p>
          <span>
            WE RESERVE THE RIGHT TO MODIFY THE SERVICES AT ANY TIME, BUT WE HAVE
            NO OBLIGATION TO UPDATE THE SERVICES. YOU AGREE THAT IT IS YOUR
            RESPONSIBILITY TO MONITOR CHANGES TO THE SERVICES THAT MAY AFFECT
            YOU. YOU AGREE THAT WE MAY REMOVE THE SERVICES AND/OR ANY CONTENT
            THEREON FOR INDEFINITE PERIODS OF TIME OR CANCEL THE SERVICES AT ANY
            TIME, WITHOUT NOTICE TO YOU.
          </span>
        </p>
        <p>&nbsp;</p>
        <ol start="12">
          <li>
            <strong> Severability</strong>
          </li>
        </ol>
        <p>
          <span>
            If any provision of the Agreement (including, without limitation,
            these Terms) is determined to be unlawful, void, or unenforceable,
            such provision shall nonetheless be enforceable to the fullest
            extent permitted by applicable law, and the unenforceable portion
            shall be deemed to be severed from the Agreement. Such determination
            shall not affect the validity and enforceability of any other
            remaining provisions.
          </span>
        </p>
        <p>&nbsp;</p>
        <ol start="13">
          <li>
            <strong> Assignment</strong>
          </li>
        </ol>
        <p>
          <span>
            The Agreement (including, without limitation, these Terms) may be
            assigned without your prior consent to any Zoro Labs Indemnified
            Party, or to its successors in the interest of any business
            associated with the Services provided by us. You may not assign or
            transfer any rights or obligations under the Agreement without our
            prior written consent.
          </span>
        </p>
        <p>&nbsp;</p>
        <ol start="14">
          <li>
            <strong> Entire Agreement</strong>
          </li>
        </ol>
        <p>
          <span>
            The Agreement (including, without limitation, these Terms, and the
            Privacy Policy) and any policies or operating rules posted by us on
            the Services constitute the entire agreement and understanding
            between you and us and govern your use of the Services, superseding
            any prior or contemporaneous agreements, communications, and
            proposals, whether oral or written, between you and us (including,
            but not limited to, any prior versions of these Terms). Any failure
            by us to exercise or enforce any right or provision of the Agreement
            (including, without limitation, these Terms) shall not constitute a
            waiver of such right or provision.
          </span>
        </p>
        <p>&nbsp;</p>
        <ol start="15">
          <li>
            <strong> Governing Law</strong>
          </li>
        </ol>
        <p>
          <span>
            These Terms and any separate agreements whereby we provide you
            Services shall be governed by and construed in accordance with the
            laws of the Cayman Islands.
          </span>
        </p>
        <p>&nbsp;</p>
        <ol start="16">
          <li>
            <strong> Contact Us</strong>
          </li>
        </ol>
        <p>
          <span>
            You may contact us with questions about your use of the Services at
            help@zoroprotocol.com.
          </span>
        </p>
      </div>
      <SecondaryButton onClick={handleClose} css={styles.acceptTerms}>{t("tos.button")}</SecondaryButton>
    </TosPPModal>
  );
};

export default TosModal;
