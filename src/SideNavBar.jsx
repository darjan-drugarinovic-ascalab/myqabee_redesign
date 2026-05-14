const ACTIVE = "text-primary dark:text-primary-fixed-dim bg-primary-container/10 dark:bg-on-primary-fixed-variant border-r-4 border-primary font-bold flex items-center gap-3 px-4 py-3 hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim transition-all text-label-md font-label-md opacity-80 duration-150 translate-x-1 duration-200";
const INACTIVE = "text-secondary dark:text-secondary-fixed-dim flex items-center gap-3 px-4 py-3 hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim transition-all text-label-md font-label-md";

const NavLink = ({ id, icon, label, current, onNavigate, hotspot }) => {
  const active = current === id;
  return (
    <a
      className={active ? ACTIVE : INACTIVE}
      href="#"
      data-hotspot={hotspot ? "true" : undefined}
      onClick={(e) => {
        e.preventDefault();
        onNavigate?.(id);
      }}
    >
      <span className={`material-symbols-outlined${active ? " text-primary-container" : ""}`}>{icon}</span>
      {label}
    </a>
  );
};

export const SideNavBar = ({ current = "test-cases", onNavigate }) => {
  return (
    <nav className="bg-surface dark:bg-inverse-surface border-r border-outline-variant dark:border-outline bg-surface-container-lowest dark:bg-inverse-surface docked fixed left-0 top-0 h-screen w-[240px] flex flex-col py-4 space-y-2 z-40 shadow-[0px_2px_4px_rgba(0,0,0,0.04)]">
      {/* Header */}
      <div className="px-4 py-2 flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>bug_report</span>
        <div className="flex flex-col">
          <span className="text-headline-md font-headline-md font-bold text-on-surface">myQABee</span>
        </div>
      </div>
      <div className="px-4 py-2 text-label-sm font-label-sm text-secondary">Discover</div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-1">
        <NavLink id="projects" icon="folder" label="Projects" current={current} onNavigate={onNavigate} />
        <NavLink id="environments" icon="settings_ethernet" label="Environments" current={current} onNavigate={onNavigate} />
        <NavLink id="test-cases-img" icon="list_alt" label="Test Cases" current={current} onNavigate={onNavigate} hotspot />
        <NavLink id="test-cases" icon="list_alt" label="Test Cases V1" current={current} onNavigate={onNavigate} hotspot />
        <NavLink id="test-cycles-img" icon="rebase_edit" label="Test Cycles" current={current} onNavigate={onNavigate} hotspot />
        <NavLink id="test-cycles" icon="rebase_edit" label="Test Cycles V1" current={current} onNavigate={onNavigate} hotspot />
        <NavLink id="testing-reports" icon="analytics" label="Testing Reports" current={current} onNavigate={onNavigate} />
        <NavLink id="activity-panel" icon="history" label="Activity Panel" current={current} onNavigate={onNavigate} />
      </div>
      {/* Footer Link */}
      <div className="mt-auto border-t border-outline-variant pt-2">
        <NavLink id="discover" icon="explore" label="Discover" current={current} onNavigate={onNavigate} />
      </div>
    </nav>
  );
};

export default SideNavBar;
