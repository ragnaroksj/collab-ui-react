/**
 * @category layout
 * @component footer
 * @variations collab-ui-react
 */

import React from 'react';
import PropTypes from 'prop-types';
import { SocialList } from '@collab-ui/react';

export default class Footer extends React.Component {
  static displayName = 'Footer';

  render() {
    const { color, logo, copyright, social, className, children } = this.props;
    const footerTopSection =  children && (
      <section className='cui-footer__top'>{children}</section>
    );
    const footerBottomSection = (logo || copyright || social) && (
      <section className='cui-footer__bottom'>
        {
          (logo || copyright) &&
            <span className='cui-footer__bottom--position-left'>
              <span className='cui-footer__logo'>{logo}</span>
              {copyright}
            </span>
        }
        {
          social && <span className='cui-footer__bottom--position-right'>{social}</span>
        }
      </section>
    );

    return (
      <footer className={
        `cui-footer` +
        ` cui-footer--${color}` +
        ` ${className}`
      }>
        {footerTopSection}
        {footerBottomSection}
      </footer>
    );
  }
}

Footer.propTypes = {
  color: PropTypes.string,
  logo: PropTypes.node,
  copyright: PropTypes.string,
  social: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node
};

Footer.defaultProps = {
  color: 'dark',
  logo: null,
  copyright: '',
  social: null,
  className: '',
  children: null
};

/**
* @name Footer
* @description default footer
*
* @category layout
* @component footer
* @section default
*
* @js
import { SocialList, Icon, List, ListItem } from '@collab-ui/react';

export default class DefaultFooter extends React.PureComponent {
  render() {
    const copyright = '2018 Cisco and /or its affiliate';
    const social = (
      <SocialList>
        <List tabType='horizontal' className='social-list'>
          <ListItem link='https://www.facebook.com'>
            <i className='icon icon-facebook-circle_24' />
          </ListItem>
          <ListItem link='https://www.twitter.com'>
            <i className='icon icon-twitter-circle_24' />
          </ListItem>
          <ListItem link='https://www.linkedin.com'>
            <i className='icon icon-linkedin-circle_24' />
          </ListItem>
        </List>
      </SocialList>
    );

    return (
      <div className='row'>
        <Footer
          logo={<i className='icon icon-cisco-logo' />}
          copyright='2018 Cisco and /or its affiliate'
          social={social}
        >
          <div className='columns medium-3'>
            <h5 className='cui-footer__list-item-title'>Connect</h5>
            <List>
              <ListItem label='24/7 Support' />
              <ListItem label='Developer Events' />
              <ListItem label='Contact Sales' />
            </List>
          </div>
          <div className='columns medium-3'>
            <h5 className='cui-footer__list-item-title'>Handy Links</h5>
            <List>
              <ListItem label='Cisco Webex Ambassadors' />
              <ListItem label='Cisco Webex Control Hub' />
              <ListItem label='Cisco Webex Innovation Fund' />
            </List>
          </div>
          <div className='columns medium-3'>
            <h5 className='cui-footer__list-item-title'>Resources</h5>
            <List>
              <ListItem label='Open Source Bot Starter Kits' />
              <ListItem label='Download Cisco Webex Teams' />
              <ListItem label='Devnet Learning Labs' />
            </List>
          </div>
          <div className='columns medium-3'>
            <List>
              <ListItem label='Terms Of Service' />
              <ListItem label='Privacy Policy' />
              <ListItem label='Cookie Policy' />
              <ListItem label='Trademarks' />
            </List>
          </div>
        </Footer>
      </div>
    );
  }
}
**/
