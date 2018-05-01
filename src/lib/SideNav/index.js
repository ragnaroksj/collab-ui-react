/**
 * @category layout
 * @component side-nav
 * @variations collab-ui-react
 */

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@collab-ui/react/Icon';

export default class SideNav extends React.Component {
  static displayName = 'SideNav';

  state = {
    expanded: this.props.expanded
  };

  handleNavToggle = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const { children, navSectionTitle, topMenu, expandable, className } = this.props;
    const topMenuTitle = topMenu ? 'top' : 'sub';
    const expandedStatus = (!expandable || this.state.expanded) ? 'expanded' : 'collapse';
    const navSectionTitleText= navSectionTitle &&
      <h3
        className={`cui-side-nav__title--${topMenuTitle}`}
      >
        <button
          className='cui-side-nav__button'
          onClick={() => {expandable ? this.handleNavToggle() : false;}}>
          {navSectionTitle}
          {expandable && expandedStatus === 'collapse' && <Icon name='arrow-down_16' />}
          {expandable && expandedStatus === 'expanded' && <Icon name='arrow-up_16' />}
        </button>
      </h3>;

    return (
      <div className={`cui-side-nav ${className} cui-side-nav--${expandedStatus}`}>
        {navSectionTitleText}
        {children}
      </div>
    );
  }
}

SideNav.propTypes = {
  /**
   * Children Nodes to Render inside side navigation
   */
  children: PropTypes.node,
  /**
   * Title for the side navigation
   */
  navSectionTitle: PropTypes.string,
  /**
   * Check whether the navigation is the top level
   */
  topMenu: PropTypes.bool,
  /**
   * Make the navigation expandable
   */
  expandable: PropTypes.bool,
  /**
   * Set navigation expanded or collapsed
   */
  expanded: PropTypes.bool,
   /**
   * optional customized css class string
   */
  className: PropTypes.string
};

SideNav.defaultProps = {
  children: null,
  navSectionTitle: '',
  topMenu: false,
  expandable: false,
  expanded: false,
  className: ''
};

/**
* @name Default SideNav
* @description Default SideNav
*
* @category layout
* @component side-nav
* @section default
*
* @js
import { List, ListItem } from '@collab-ui/react';
import { NavLink } from 'react-router-dom'

export default class SideNavDefault extends React.PureComponent {
  render() {
    const anchorNode = <NavLink to='/containers/list-item' />;

    return (
      <div className='row' style={{marginBottom: '1rem'}}>
        <SideNav navSectionTitle='OVERVIEW' topMenu>
          <List>
            <ListItem label='Platform Introduction' customAnchorNode={anchorNode} />
            <ListItem label='Bots' customAnchorNode={anchorNode} />
            <ListItem label='Widgets' customAnchorNode={anchorNode} />
            <ListItem label='Integration' customAnchorNode={anchorNode} />
            <ListItem label='Guest Issuer' customAnchorNode={anchorNode} />
          </List>
        </SideNav>
      </div>
    );
  }
}
**/

/**
* @name Expandable SideNav
* @description Side Navigation with collapse effect
*
* @category layout
* @component side-nav
* @section expand
*
* @js
import { List, ListItem } from '@collab-ui/react';
import { NavLink } from 'react-router-dom'

export default class SideNavExpand extends React.PureComponent {
  render() {
    const anchorNode = <NavLink to='/containers/list-item' />;

    return (
      <div className='row' style={{marginBottom: '1rem'}}>
        <SideNav navSectionTitle='Guides' expandable expanded={false}>
          <List>
            <ListItem label='Authentication' customAnchorNode={anchorNode} />
            <ListItem label='Admin API' customAnchorNode={anchorNode} />
            <ListItem label='Webhooks' customAnchorNode={anchorNode} />
            <ListItem label='Compliance' customAnchorNode={anchorNode} />
          </List>
        </SideNav>
      </div>
    );
  }
}
**/

/**
* @name Nested Expandable SideNav
* @description Nested Side Navigation with collapse effect
*
* @category layout
* @component side-nav
* @section nested
*
* @js
import { List, ListItem } from '@collab-ui/react';
import { NavLink } from 'react-router-dom'

export default class SideNavNested extends React.PureComponent {
  render() {
    const anchorNode = <NavLink to='/containers/list-item' />;

    return (
      <div className='row' style={{marginBottom: '1rem'}}>
        <SideNav navSectionTitle='Reference' expandable expanded={false}>
          <List>
            <ListItem label='Admins' customAnchorNode={anchorNode} />
            <ListItem label='Devices' customAnchorNode={anchorNode} />
            <ListItem label='Licenses' customAnchorNode={anchorNode} />
            <SideNav navSectionTitle='Messages' className='cui-side-nav__reference' expandable expanded={false}>
              <List>
                <ListItem label='List Messages' customAnchorNode={anchorNode} />
                <ListItem label='Create a Messages' customAnchorNode={anchorNode} />
                <ListItem label='Get Message Details' customAnchorNode={anchorNode} />
                <ListItem label='Delete a Message' customAnchorNode={anchorNode} />
              </List>
            </SideNav>
          </List>
        </SideNav>
      </div>
    );
  }
}
**/

/**
* @name Full SideNav
* @description Full Side Navigation
*
* @category layout
* @component side-nav
* @section full
*
* @js
import { List, ListItem } from '@collab-ui/react';
import { NavLink } from 'react-router-dom'

export default class SideNavFull extends React.PureComponent {
  render() {
    const anchorNode = <NavLink to='/containers/list-item' />;

    return (
      <div className='row' style={{marginBottom: '1rem'}}>
        <SideNav navSectionTitle='OVERVIEW' topMenu>
          <List>
            <ListItem label='Platform Introduction' customAnchorNode={anchorNode} />
            <ListItem label='Bots' customAnchorNode={anchorNode} />
            <ListItem label='Widgets' customAnchorNode={anchorNode} />
            <ListItem label='Integration' customAnchorNode={anchorNode} />
            <ListItem label='Guest Issuer' customAnchorNode={anchorNode} />
          </List>
        </SideNav>
        <div style={{marginBottom: '1rem'}}></div>
        <SideNav navSectionTitle='REST API' topMenu>
          <List>
            <ListItem label='Basics' customAnchorNode={anchorNode} />
            <SideNav navSectionTitle='Guides' expandable expanded={false}>
              <List className='cui-submenu'>
                <ListItem label='Authentication' customAnchorNode={anchorNode} />
                <ListItem label='Admin API' customAnchorNode={anchorNode} />
                <ListItem label='Webhooks' customAnchorNode={anchorNode} />
                <ListItem label='Compliance' customAnchorNode={anchorNode} />
                <ListItem label='Metrics and Reporting' customAnchorNode={anchorNode} />
              </List>
            </SideNav>
            <SideNav navSectionTitle='Reference' className='cui-side-nav__reference-container' expandable expanded={false}>
              <List className='cui-submenu'>
                <SideNav navSectionTitle='Admins' />
                <SideNav navSectionTitle='Devices' />
                <SideNav navSectionTitle='Licenses' />
                <SideNav navSectionTitle='Memberships' />
                <SideNav navSectionTitle='Messages' className='cui-side-nav__reference'>
                  <List>
                    <ListItem label='List Messages' customAnchorNode={anchorNode} />
                    <ListItem label='Create a Messages' customAnchorNode={anchorNode} />
                    <ListItem label='Get Message Details' customAnchorNode={anchorNode} />
                    <ListItem label='Delete a Message' customAnchorNode={anchorNode} />
                  </List>
                </SideNav>
                <SideNav navSectionTitle='Organizations' />
                <SideNav navSectionTitle='People' />
                <SideNav navSectionTitle='Policies' />
                <SideNav navSectionTitle='Roles' />
                <SideNav navSectionTitle='Rooms' />
                <SideNav navSectionTitle='Teams' />
                <SideNav navSectionTitle='Team Memberships' />
              </List>
            </SideNav>
          </List>
        </SideNav>
        <div style={{marginBottom: '1rem'}}></div>
        <SideNav navSectionTitle='SDKS' topMenu>
          <List>
            <ListItem label='iOS' customAnchorNode={anchorNode} />
            <ListItem label='Android' customAnchorNode={anchorNode} />
            <ListItem label='Widgets' customAnchorNode={anchorNode} />
            <ListItem label='Windows' customAnchorNode={anchorNode} />
            <ListItem label='Community' customAnchorNode={anchorNode} />
          </List>
        </SideNav>
      </div>
    );
  }
}
**/
