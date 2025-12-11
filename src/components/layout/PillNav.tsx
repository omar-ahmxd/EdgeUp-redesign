import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './PillNav.css';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  variant?: 'default' | 'cta';
  children?: { label: string; href: string; ariaLabel?: string }[];
};

type PillNavProps = {
  logo: string;
  logoAlt?: string;
  logoHref?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  accentColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
  showLogo?: boolean;
  containerClassName?: string;
  frameless?: boolean;
};

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Logo',
  logoHref = '/',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#0b1f3a',
  accentColor,
  pillColor = 'rgba(255, 255, 255, 0.08)',
  hoveredPillTextColor = '#e8f3ff',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
  showLogo = true,
  containerClassName = '',
  frameless = false
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const circleRefs = useRef<HTMLSpanElement[]>([]);
  const tlRefs = useRef<gsap.core.Timeline[]>([]);
  const activeTweenRefs = useRef<gsap.core.Tween[]>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | HTMLSpanElement | null>(null);

  // Keep ref arrays in sync with the number of nav items
  useEffect(() => {
    circleRefs.current = circleRefs.current.slice(0, items.length);
    tlRefs.current = tlRefs.current.slice(0, items.length);
    activeTweenRefs.current = activeTweenRefs.current.slice(0, items.length);
  }, [items.length]);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const hoverLabel = pill.querySelector<HTMLElement>('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(hoverLabel, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
    }

    if (initialLoadAnimation) {
      const logoNode = logoRef.current;
      const navItems = navItemsRef.current;

      if (logoNode) {
        gsap.set(logoNode, { scale: 0.85, opacity: 0 });
        gsap.to(logoNode, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease
        });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: 'hidden', opacity: 0 });
        gsap.to(navItems, {
          width: 'auto',
          opacity: 1,
          duration: 0.6,
          ease
        });
      }
    }

    return () => {
      window.removeEventListener('resize', onResize);
      tlRefs.current.forEach(tl => tl?.kill());
      activeTweenRefs.current.forEach(tween => tween?.kill());
    };
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const animateMobileMenu = (nextState: boolean) => {
    setIsMobileMenuOpen(nextState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll<HTMLElement>('.hamburger-line');
      if (nextState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (nextState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: 'top center'
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: 'top center',
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          }
        });
      }
    }

    onMobileMenuClick?.();
  };

  const toggleMobileMenu = () => animateMobileMenu(!isMobileMenuOpen);
  const closeMobileMenu = () => animateMobileMenu(false);

  const isExternalLink = (href?: string) =>
    Boolean(
      href &&
        (href.startsWith('http://') ||
          href.startsWith('https://') ||
          href.startsWith('//') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:') ||
          href.startsWith('#'))
    );

  const isRouterLink = (href?: string) => Boolean(href && !isExternalLink(href));

  const cssVars: React.CSSProperties = {
    ['--base']: baseColor,
    ['--accent']: accentColor ?? baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor
  };

  const renderLogo = () => {
    if (!showLogo) return null;

    if (isRouterLink(logoHref)) {
      return (
        <Link
          className="pill-logo"
          to={logoHref}
          aria-label="Home"
          onMouseEnter={handleLogoEnter}
          role="menuitem"
          ref={el => {
            logoRef.current = el;
          }}
        >
          <img src={logo} alt={logoAlt} ref={logoImgRef} />
        </Link>
      );
    }

    return (
      <a
        className="pill-logo"
        href={logoHref}
        aria-label="Home"
        onMouseEnter={handleLogoEnter}
        ref={el => {
          logoRef.current = el;
        }}
      >
        <img src={logo} alt={logoAlt} ref={logoImgRef} />
      </a>
    );
  };

  const renderItem = (item: PillNavItem, i: number) => {
    const isActive = activeHref === item.href;
    const pillClasses = `pill${isActive ? ' is-active' : ''}${item.variant === 'cta' ? ' pill-cta' : ''}`;
    const hasChildren = Boolean(item.children?.length);
    const isOpen = openDropdown === i;

    const basePill = (content: React.ReactNode) => (
      <>
        {item.variant !== 'cta' && (
          <span
            className="hover-circle"
            aria-hidden="true"
            ref={el => {
              circleRefs.current[i] = el as HTMLSpanElement;
            }}
          />
        )}
        <span className="label-stack">
          <span className="pill-label">{item.label}</span>
          <span className="pill-label-hover" aria-hidden="true">
            {item.label}
          </span>
        </span>
        {content}
      </>
    );

    const dropdownMenu = hasChildren ? (
      <div className={`pill-dropdown-menu ${isOpen ? 'open' : ''}`}>
        {item.children!.map(child => {
          const childIsRouter = isRouterLink(child.href);
          const childClasses = 'pill-dropdown-link';
          if (childIsRouter) {
            return (
              <Link
                key={child.href}
                to={child.href}
                aria-label={child.ariaLabel || child.label}
                className={childClasses}
              >
                {child.label}
              </Link>
            );
          }
          return (
            <a
              key={child.href}
              href={child.href}
              aria-label={child.ariaLabel || child.label}
              className={childClasses}
            >
              {child.label}
            </a>
          );
        })}
      </div>
    ) : null;

    if (isRouterLink(item.href)) {
      return (
        <div
          className={`pill-dropdown ${hasChildren ? 'has-children' : ''}`}
          onMouseEnter={() => {
            handleEnter(i);
            if (hasChildren) setOpenDropdown(i);
          }}
          onMouseLeave={() => {
            handleLeave(i);
            if (hasChildren) setOpenDropdown(null);
          }}
          onBlur={e => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setOpenDropdown(null);
            }
          }}
        >
          <Link
            role="menuitem"
            to={item.href}
            className={`${pillClasses}${hasChildren ? ' pill-with-dropdown' : ''}`}
            aria-label={item.ariaLabel || item.label}
            aria-haspopup={hasChildren ? 'true' : undefined}
            aria-expanded={hasChildren ? isOpen : undefined}
            onFocus={() => hasChildren && setOpenDropdown(i)}
            onClick={e => {
              if (hasChildren && !isOpen) {
                e.preventDefault();
                setOpenDropdown(i);
              }
              // if already open, allow navigation to About page
            }}
          >
            {basePill(null)}
          </Link>
          {dropdownMenu}
        </div>
      );
    }

    return (
      <div
        className={`pill-dropdown ${hasChildren ? 'has-children' : ''}`}
        onMouseEnter={() => {
          handleEnter(i);
          if (hasChildren) setOpenDropdown(i);
        }}
        onMouseLeave={() => {
          handleLeave(i);
          if (hasChildren) setOpenDropdown(null);
        }}
        onBlur={e => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setOpenDropdown(null);
          }
        }}
      >
        <a
          role="menuitem"
          href={item.href}
          className={`${pillClasses}${hasChildren ? ' pill-with-dropdown' : ''}`}
          aria-label={item.ariaLabel || item.label}
          aria-haspopup={hasChildren ? 'true' : undefined}
          aria-expanded={hasChildren ? isOpen : undefined}
          onFocus={() => hasChildren && setOpenDropdown(i)}
          onClick={e => {
            if (hasChildren && !isOpen) {
              e.preventDefault();
              setOpenDropdown(i);
            }
            // if already open, allow navigation
          }}
        >
          {basePill(null)}
        </a>
        {dropdownMenu}
      </div>
    );
  };

  return (
    <div className={`pill-nav-container ${containerClassName}`.trim()}>
      <nav className={`pill-nav ${frameless ? 'frameless' : ''} ${className}`.trim()} aria-label="Primary" style={cssVars}>
        {renderLogo()}

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => (
              <li key={item.href || `item-${i}`} role="none">
                {renderItem(item, i)}
              </li>
            ))}
          </ul>
        </div>

        <button
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          ref={hamburgerRef}
          type="button"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map((item, i) => (
            <li key={item.href || `mobile-item-${i}`}>
              {isRouterLink(item.href) ? (
                <Link
                  to={item.href}
                  className={`mobile-menu-link${item.variant === 'cta' ? ' pill-cta' : ''}${
                    activeHref === item.href ? ' is-active' : ''
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={`mobile-menu-link${item.variant === 'cta' ? ' pill-cta' : ''}${
                    activeHref === item.href ? ' is-active' : ''
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              )}
              {item.children?.length ? (
                <div className="mobile-menu-sublinks">
                  {item.children.map(child =>
                    isRouterLink(child.href) ? (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="mobile-menu-sublink"
                        onClick={closeMobileMenu}
                      >
                        {child.label}
                      </Link>
                    ) : (
                      <a
                        key={child.href}
                        href={child.href}
                        className="mobile-menu-sublink"
                        onClick={closeMobileMenu}
                      >
                        {child.label}
                      </a>
                    )
                  )}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
