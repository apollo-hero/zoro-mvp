/** @jsxImportSource @emotion/react */
import TosPPModal from ".";
import { useStyles } from "./styles";
import { Modal, ModalProps } from "components";
import React from "react";
import { useTranslation } from "translation";

export interface PPModalProps {
  open: boolean;
  handleClose: ModalProps["handleClose"];
}

const PPModal: React.FC<PPModalProps> = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <TosPPModal
      isOpen={open}
      handleClose={handleClose}
      title={t("pp.header")}
      css={styles.ppModal}
    >
      <div css={styles.ppContent} className="ppContent">
        <ol>
          <li>
            <strong>Preface </strong>
            <span>
              This Privacy Policy provides our privacy policy regarding the
              nature, purpose, use, and sharing of personal data or other
              information collected from the users of the website
              zoroprotocol.com and other websites which use subdomains of
              zoroprotocol.com (the "Site"). We are committed to protecting and
              respecting your privacy. Please read this carefully as this
              Privacy Policy is legally binding when you use the Site. As used
              in this Privacy Policy, "we", "us" or "our" refers to Zoro
              Protocol Team, which has been actively involved in the ecological
              construction of Zoro Protocol. You can reach us with any request
              relating to this Privacy Policy via contact details provided
              below.&nbsp;
            </span>
          </li>
        </ol>
        <ol start="2">
          <li>
            <strong>Data processing in connection with the Site&nbsp;</strong>
          </li>
        </ol>
        <p>
          <span>2.1 </span>
          <strong>Use of Cookies and Similar Technologies</strong>
          <span>
            {" "}
            The Site is using cookies. Cookies are small text files that are
            placed on your computer by websites that you visit. They are widely
            used in order to make websites work, or work more efficiently, as
            well as to provide information to the owners of the site. Cookies
            are typically stored on your computer's hard drive. Information
            collected from cookies is used by us to evaluate the effectiveness
            of our Site and analyze trends. The information collected from
            cookies allows us to determine such things as which parts of the
            Site are most visited and difficulties our visitors may experience
            in accessing the Site. With this knowledge, we can improve the
            quality of your experience on the Site by recognizing and delivering
            more of the most desired features and information, as well as by
            resolving access difficulties. We use third party service providers,
            to assist us in better understanding the use of our Site. Our
            service providers will place cookies on the hard drive of your
            computer (or use similar technologies) and will receive information
            that we select that will educate us on such things as how visitors
            navigate around our Site. This information is aggregated to provide
            statistical data about our users' browsing actions and patterns, and
            does not personally identify individuals. This information may
            include: Computer or mobile device information, Website usage
            information, such as: Page views, Button clicks, Input form changes
            (without the values being entered), Errors. Our service providers
            analyses this information and provides us with aggregate reports.
            The information and analysis provided by our service providers will
            be used to assist us in better understanding our visitors' interests
            in our Site and how to better serve those interests. If you want to
            avoid using cookies altogether, you can disable cookies in your
            browser. However, disabling cookies might make it impossible for you
            to use certain features of the Site. Your use of the Site with a
            browser that is configure to accept cookies constitutes an
            acceptance of our and third-party cookies.&nbsp;
          </span>
        </p>
        <p>
          <span>2.2</span>
          <strong> Email Marketing </strong>
          <span>
            If you subscribe to our newsletter we may occasionally communicate
            project news, updates, promotions and related information relating
            to Zoro Protocol. We shall only do this where you have given us your
            consent. If you want to opt out of receiving promotional and
            marketing emails in relation to which you might receive in
            accordance with this section, you can best opt out by clicking
            "unsubscribe" at the bottom of an email we sent you.&nbsp;
          </span>
        </p>
        <p>
          <span>2.3 </span>
          <strong>Your inquiries</strong>
          <span>
            {" "}
            You may contact us by e-mail to the following e-mail address:
            help@zoroprotocol.com. We use the data that you provide in an email
            to us, which you may give voluntarily, only in order to answer your
            contact question or to reply to your email in the best possible
            manner.&nbsp;
          </span>
        </p>
        <p>
          <span>2.4 </span>
          <strong>Social media</strong>
          <span>
            {" "}
            We may use plugins from social networks such as GitHub, Twitter,
            Telegram, Medium on the Site. When you activate them (by clicking on
            them), the operators of the respective social networks may record
            that you are on the Site and may use this information. This
            processing of your personal data lays in the responsibility of these
            individual social media platforms and occurs according to their
            privacy policies. Please check with these individual social media
            platforms regarding their privacy policies. We are not responsible
            for data collected by these individual social media platforms.&nbsp;
          </span>
        </p>
        <p>
          <span>2.5 </span>
          <strong>Your rights</strong>
          <span>&nbsp;</span>
        </p>
        <p>
          <span>2.5.1 </span>
          <strong>Right to access </strong>
          <span>
            As a data subject you have the right to obtain from us free
            information about your personal data processed at any time and a
            copy of this information. Furthermore, you will have access to the
            following information: the purposes of the processing; the
            categories of personal data concerned; where possible, the envisaged
            period for which the personal data will be processed, or, if not
            possible, the criteria used to determine that period; the existence
            of the right to request from us rectification or erasure of personal
            data, or restriction of processing of personal data concerning you,
            or to object to such processing; the existence of the right to lodge
            a complaint with a supervisory authority; where the personal data
            are not collected directly from you, any available information as to
            their source; and the existence of automated decision-making,
            including profiling, and, at least in those cases, meaningful
            information about the logic involved, as well as the significance
            and envisaged consequences of such processing for you.&nbsp;
          </span>
        </p>
        <p>
          <span>2.5.2 </span>
          <strong>Right to rectification </strong>
          <span>
            You have the right to obtain from us, without undue delay, the
            rectification of inaccurate personal data concerning you. Taking
            into account the purposes of the processing, you shall have the
            right to have incomplete personal data completed, including by means
            of providing a supplementary statement.&nbsp;
          </span>
        </p>
        <p>
          <span>2.5.3 </span>
          <strong>Right to be forgotten</strong>
          <span>
            {" "}
            You have the right to obtain from us the erasure of personal data
            concerning you as soon as possible, and we shall have the obligation
            to erase personal data without undue delay where required by the
            law, including when: the personal data is no longer necessary in
            relation to the purposes for which they were collected or otherwise
            processed; there is no longer a legal ground for the processing; you
            object to the processing and there are no overriding legitimate
            grounds for the processing; the personal data has been unlawfully
            processed; the personal data must be erased for compliance with a
            legal obligation in accordance with the applicable law to which we
            are subject.&nbsp;
          </span>
        </p>
        <p>
          <span>2.5.4 </span>
          <strong>Right to restriction of processing </strong>
          <span>
            You have the right to obtain from the Foundation restriction of
            processing where one of the following applies: the accuracy of the
            personal data is contested by you, for a period enabling us to
            verify the accuracy of the personal data; the processing is unlawful
            and you oppose the erasure of the personal data and requests instead
            the restriction of their use instead; we no longer needs the
            personal data for the purposes of the processing, but they are
            required by you for the establishment, exercise or defense of legal
            claims; and/o you have objected to processing pursuant to applicable
            laws.&nbsp;
          </span>
        </p>
        <p>
          <span>2.5.5 </span>
          <strong>Right to object </strong>
          <span>
            You have the right to object, on grounds relating to your particular
            situation, at any time, to the processing of personal data
            concerning you. We shall no longer process the personal data in the
            event of the objection, unless we can demonstrate reasonable grounds
            for the processing, which override the interests, rights and
            freedoms of you, or for the establishment, exercise or defense of
            legal claims.&nbsp;
          </span>
        </p>
        <p>
          <span>2.5.6</span>
          <strong> Right to withdraw</strong>
          <span>
            {" "}
            data protection consent You have the right to withdraw your consent
            to processing of your personal data at any time.
          </span>
        </p>
        <ol start="3">
          <li>
            <strong>International transfers</strong>
            <span>
              {" "}
              We are entitled to transfer your personal data to third parties
              abroad for the purposes of the data processing. As personal data
              processors, they are obliged to protect data privacy to the same
              extent as we ourselves. We choose the processors carefully to
              ensure compliance with applicable laws.
            </span>
          </li>
        </ol>
        <ol start="4">
          <li>
            <strong>Data security</strong>
            <span>
              {" "}
              We use appropriate technical and organizational security measures
              to protect your personal data. Our security measures are
              continuously being improved in line with technical developments.
              Please note that any data transmission on the Internet (e.g.
              communication by e-mail) is generally not secure and we accept no
              liability for data transmitted to us via the Internet.
              Unfortunately, absolute protection is not technically possible.
              This information does not apply to the websites of third parties
              and the corresponding links given on the Site. We assume no
              responsibility and liability for these.&nbsp;
            </span>
          </li>
        </ol>
        <ol start="5">
          <li>
            <strong>Duration of data processing</strong>
            <span>
              {" "}
              We will process your personal data only for the period necessary
              to achieve the purpose of the processing, or as required by
              applicable laws. After the period the personal data will be
              deleted.&nbsp;
            </span>
          </li>
        </ol>
        <ol start="6">
          <li>
            <strong>Amendments to this Policy</strong>
            <span>
              {" "}
              We may amend this Privacy Policy at any time by posting the
              amended version on the Site including the effective date of the
              amended version. The current version of the Privacy Policy, as
              published on the Site, is applicable.&nbsp;
            </span>
          </li>
        </ol>
        <ol start="7">
          <li>
            <strong>Contact </strong>
            <span>
              Please contact us with questions, comments, or concerns regarding
              our Privacy Policy as well as with any requests at
              help@zoroprotocol.com.
            </span>
          </li>
        </ol>
      </div>
    </TosPPModal>
  );
};

export default PPModal;
