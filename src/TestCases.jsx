import { useState } from "react";
import SideNavBar from "./SideNavBar";

const TEST_CASES = [
  { name: "aaaaaaaaaaaaaaaa", info: true },
  { name: "win-gui-pdf-server", info: true },
  { name: "browser url", info: false },
  { name: "myQABee", info: true },
  { name: "case 13:14:20 Fri, 19 Dec 2025", info: true },
];

export const TestCases = ({ current, onNavigate }) => {
  const [selectedCase, setSelectedCase] = useState("myQABee");
  return (
    <div className="flex h-screen">
      <SideNavBar current={current} onNavigate={onNavigate} />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col ml-[240px] min-w-0 bg-surface-container-low">
        {/* TopAppBar */}
        <header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline flex justify-between items-center w-full px-margin-desktop h-16 z-50 shrink-0">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:bg-surface-container-high rounded p-1 transition-colors">menu</span>
            {/* Project Dropdown */}
            <div className="flex items-center border border-outline-variant rounded bg-surface-container-lowest px-3 py-1.5 cursor-pointer hover:border-primary transition-colors">
              <span className="text-body-md font-body-md text-on-surface mr-8">trade-bee</span>
              <span className="material-symbols-outlined text-secondary text-sm">arrow_drop_down</span>
            </div>
            <div className="flex flex-col ml-4">
              <span className="text-label-sm font-label-sm text-secondary">Created by: darjan</span>
              <span className="text-label-sm font-label-sm text-secondary">Created on: Nov 20, 2025</span>
            </div>
          </div>
          <div className="flex items-center gap-stack-lg">
            {/* Mobile Recorder Status */}
            <div className="flex items-center gap-2 text-primary-container">
              <span className="material-symbols-outlined">smartphone</span>
              <div className="flex flex-col">
                <span className="text-label-sm font-label-sm font-bold">Mobile</span>
                <span className="text-label-sm font-label-sm font-bold">Recorder</span>
              </div>
            </div>
            <div className="flex flex-col border-l border-outline-variant pl-stack-lg">
              <div className="flex items-center gap-2">
                <span className="text-label-sm font-label-sm text-secondary w-[80px]">Server time:</span>
                <span className="text-label-sm font-label-sm text-on-surface">May 12, 2026, 6:11 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-label-sm font-label-sm text-secondary w-[80px]">Local time:</span>
                <span className="text-label-sm font-label-sm text-on-surface">May 12, 2026, 8:11 AM</span>
              </div>
            </div>
            <div className="flex items-center gap-stack-sm text-primary dark:text-inverse-primary border-b-2 border-transparent">
              <button className="p-2 hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim transition-colors rounded text-primary-container">
                <span className="material-symbols-outlined">download</span>
              </button>
              <button className="p-2 hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim transition-colors rounded text-primary-container">
                <span className="material-symbols-outlined">mail</span>
              </button>
              <button className="p-2 hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim transition-colors rounded text-primary-container">
                <span className="material-symbols-outlined">phone</span>
              </button>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-surface-container-high p-1.5 rounded transition-colors border-l border-outline-variant pl-stack-lg">
              <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold">
                <span className="material-symbols-outlined">person</span>
              </div>
              <span className="text-body-md font-body-md font-medium text-on-surface">darjan</span>
            </div>
          </div>
        </header>

        {/* Main Workspace Area */}
        <main className="flex-1 flex flex-col p-stack-md gap-stack-md overflow-hidden min-h-0">
          {/* Content Area */}
          <div className="flex-1 flex flex-col gap-stack-md min-h-0 overflow-hidden pb-2">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-label-md font-label-md text-secondary shrink-0">
              <span>Project Details</span>
              <span>/</span>
              <span>Project Test Cases</span>
              <span>/</span>
              <span className="text-on-surface font-bold">{selectedCase}</span>
            </div>

            {/* 4-Column Layout Area Below */}
            <div className="flex-1 flex gap-stack-md min-h-0 overflow-hidden">
              {/* Column 1: Test case details */}
              <div className="w-[400px] shrink-0 flex flex-col bg-surface-container-lowest border border-outline-variant shadow-[0px_2px_4px_rgba(0,0,0,0.04)] rounded-lg overflow-hidden">
                <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-bright shrink-0">
                  <h3 className="text-headline-md font-headline-md text-on-surface">Test Cases ({TEST_CASES.length})</h3>
                  <button className="flex items-center gap-1 text-primary-container border border-primary-container hover:bg-primary-container/10 px-2 py-1 rounded text-label-md font-label-md transition-colors shrink-0">
                    <span className="material-symbols-outlined text-[16px]">add</span> Add
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto flex flex-col">
                  {/* Test Cases selector */}
                  <div className="border-b border-outline-variant">
                    <div className="px-stack-md py-2 flex gap-2 border-b border-outline-variant">
                      <div className="relative flex-1">
                        <span className="material-symbols-outlined absolute left-2 top-1.5 text-secondary text-[18px]">search</span>
                        <input className="w-full border border-outline-variant rounded pl-8 pr-3 py-1.5 text-body-sm font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Search test cases..." type="text" />
                      </div>
                      <button className="text-primary-container border border-outline-variant p-1.5 rounded hover:bg-surface-container shrink-0">
                        <span className="material-symbols-outlined text-[18px]">filter_alt</span>
                      </button>
                    </div>
                    <div className="px-stack-md py-2 flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-2 text-secondary text-label-sm font-label-sm px-2 py-1 bg-surface rounded-full border border-outline-variant cursor-pointer whitespace-nowrap shrink-0">
                        <span className="material-symbols-outlined text-[16px]">expand_more</span> Ungrouped
                      </div>
                      {TEST_CASES.map((tc) => {
                        const isActive = tc.name === selectedCase;
                        return (
                          <div
                            key={tc.name}
                            data-hotspot="true"
                            onClick={() => setSelectedCase(tc.name)}
                            className={
                              isActive
                                ? "flex items-center gap-1.5 px-2 py-1 bg-primary-container/10 border-2 border-primary rounded-full cursor-pointer text-label-sm font-label-sm text-primary-container font-medium whitespace-nowrap shrink-0"
                                : "flex items-center gap-1.5 px-2 py-1 hover:bg-surface-container border border-outline-variant rounded-full cursor-pointer text-label-sm font-label-sm whitespace-nowrap shrink-0"
                            }
                          >
                            <span>{tc.name}</span>
                            {tc.info && (
                              <span className={`material-symbols-outlined text-[14px] ${isActive ? "" : "text-secondary"}`}>info</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="px-stack-md py-stack-md flex flex-col gap-stack-md">
                  <div className="text-headline-md font-headline-md font-bold text-primary-container">
                    {selectedCase}
                  </div>
                  <div className="text-body-sm font-body-sm text-secondary">
                    <span className="font-bold text-on-surface">Description:</span>
                    <div className="flex items-center gap-1 mt-1 italic text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px]">info</span>
                      No description
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-body-sm font-body-sm">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-secondary">Last execution:</span>
                      <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-label-sm font-label-sm">N/A</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-secondary">Last run:</span>
                      <span>N/A (N/A)</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-secondary">Executions:</span>
                      <span>N/A</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-secondary">Test cycles:</span>
                      <span>N/A</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-4 border-outline-variant flex items-center justify-center relative">
                      <span className="text-label-sm font-label-sm text-secondary font-bold">100.0%</span>
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
                        <path className="text-surface-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-secondary text-label-sm font-label-sm">
                    Created by darjanrec on Jan 5, 2026
                  </div>
                  </div>
                </div>
                <div className="px-stack-md py-3 flex flex-wrap items-center gap-stack-sm border-t border-outline-variant bg-surface-bright">
                  <button className="flex items-center gap-1 text-primary-container hover:bg-surface-container text-label-md font-label-md px-2 py-1 rounded transition-colors">
                    <span className="material-symbols-outlined text-[18px]">edit</span> Edit
                  </button>
                  <button className="flex items-center gap-1 text-primary-container hover:bg-surface-container text-label-md font-label-md px-2 py-1 rounded transition-colors">
                    <span className="material-symbols-outlined text-[18px]">inventory_2</span> Archive
                  </button>
                  <button className="flex items-center gap-1 text-primary-container hover:bg-surface-container text-label-md font-label-md px-2 py-1 rounded transition-colors">
                    <span className="material-symbols-outlined text-[18px]">lock</span> Lock
                  </button>
                  <button className="flex items-center gap-1 text-primary-container hover:bg-surface-container text-label-md font-label-md px-2 py-1 rounded transition-colors">
                    <span className="material-symbols-outlined text-[18px]">content_copy</span> Clone
                  </button>
                  <button className="flex items-center gap-1 text-primary-container hover:bg-surface-container text-label-md font-label-md px-2 py-1 rounded transition-colors">
                    <span className="material-symbols-outlined text-[18px]">swap_horiz</span> Convert To Selenium
                  </button>
                  <button className="flex items-center gap-1 text-primary-container hover:bg-surface-container text-label-md font-label-md px-2 py-1 rounded transition-colors">
                    <span className="material-symbols-outlined text-[18px]">upload</span> Export
                  </button>
                </div>
              </div>

              {/* Column 2: Case Execution Flow (Diagram) */}
              <section className="w-[320px] shrink-0 flex flex-col border border-outline-variant rounded-lg bg-surface-container-lowest shadow-[0px_2px_4px_rgba(0,0,0,0.04)] overflow-hidden">
                {/* Header */}
                <div className="p-3 border-b border-outline-variant flex items-center justify-center bg-surface-bright shrink-0">
                  <h3 className="text-headline-md font-headline-md text-on-surface text-center">Execution flow</h3>
                </div>
                {/* Diagram Canvas */}
                <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center">
                  {/* START Node */}
                  <div className="text-headline-md font-headline-md font-bold text-on-surface-variant tracking-widest mb-6">
                    START
                  </div>
                  {/* Active Node */}
                  <div className="w-full bg-primary-container/20 border-2 border-primary border-dashed rounded-lg p-3 flex items-center gap-2 shadow-sm relative mb-4">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">add</span>
                    <span className="text-body-sm font-body-sm text-on-surface font-medium truncate">Open page chrome://new...</span>
                    {/* Connector Down */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-outline-variant"></div>
                    <span className="material-symbols-outlined absolute -bottom-7 left-1/2 -translate-x-1/2 text-outline-variant text-[18px]">arrow_downward</span>
                  </div>
                  {/* Inactive Node */}
                  <div className="w-full bg-surface border border-outline-variant rounded-lg p-3 flex items-center gap-2 shadow-sm relative mt-4 mb-8">
                    <span className="material-symbols-outlined text-secondary text-[18px]">add</span>
                    <span className="text-body-sm font-body-sm text-on-surface truncate">click ORDER DEMO</span>
                  </div>
                  {/* END Node */}
                  <div className="text-headline-md font-headline-md font-bold text-on-surface-variant tracking-widest mt-4">
                    END
                  </div>
                </div>
              </section>

              {/* Column 2: Test Steps */}
              <div className="flex-1 flex flex-col bg-surface-container-lowest border border-outline-variant shadow-[0px_2px_4px_rgba(0,0,0,0.04)] rounded-lg overflow-hidden">
                <div className="p-3 border-b border-outline-variant bg-surface-bright shrink-0">
                  <h3 className="text-headline-md font-headline-md text-on-surface">Test Steps (50)</h3>
                </div>
                <div className="p-3 border-b border-outline-variant flex gap-4 shrink-0">
                  <div className="relative w-[200px]">
                    <select className="w-full appearance-none border border-outline-variant rounded px-3 py-1.5 text-body-md font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                      <option>Labels</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2 top-2 text-secondary pointer-events-none">arrow_drop_down</span>
                  </div>
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-2 top-1.5 text-secondary text-[18px]">search</span>
                    <input className="w-full border border-outline-variant rounded pl-8 pr-3 py-1.5 text-body-md font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Search test steps..." type="text" />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
                  {/* Step Cards */}
                  <div className="bg-surface p-3 border border-outline-variant rounded text-body-sm font-body-sm flex justify-between items-start hover:shadow-sm transition-shadow cursor-pointer">
                    <span className="break-all text-body-md">Open application C:\WINDOWS\...</span>
                    <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">info</span>
                  </div>
                  <div className="bg-surface p-3 border border-outline-variant rounded text-body-sm font-body-sm hover:shadow-sm transition-shadow cursor-pointer">
                    <span className="text-body-md">pdf validation</span>
                  </div>
                  <div className="bg-surface p-3 border border-outline-variant rounded text-body-sm font-body-sm hover:shadow-sm transition-shadow cursor-pointer">
                    <span className="text-body-md">click ORDER DEMO</span>
                  </div>
                  {/* Active Step */}
                  <div className="bg-secondary-container/30 border border-secondary-container rounded p-3 text-body-sm font-body-sm cursor-pointer shadow-sm">
                    <span className="text-body-md font-medium">Open page chrome://newtab/</span>
                  </div>
                  <div className="bg-surface p-3 border border-outline-variant rounded text-body-sm font-body-sm hover:shadow-sm transition-shadow cursor-pointer">
                    <span className="text-body-md">Type $4,120,000.00</span>
                  </div>
                  <div className="bg-surface p-3 border border-outline-variant rounded text-body-sm font-body-sm hover:shadow-sm transition-shadow cursor-pointer">
                    <span className="text-body-md">Type $411,000.00</span>
                  </div>
                </div>
                <div className="px-stack-md py-3 flex flex-wrap items-center justify-end gap-stack-sm border-t border-outline-variant bg-surface-bright shrink-0">
                  <button className="flex items-center gap-1 text-primary-container border border-primary-container hover:bg-primary-container/10 px-2 py-1 rounded text-label-md font-label-md transition-colors">
                    <span className="material-symbols-outlined text-[16px]">add</span> Add
                  </button>
                </div>
              </div>

              {/* Column 3: Edit Test Step */}
              <div className="flex-1 min-w-[320px] bg-surface-container-lowest border border-outline-variant shadow-[0px_2px_4px_rgba(0,0,0,0.04)] rounded-lg flex flex-col overflow-hidden">
                <div className="p-3 border-b border-outline-variant bg-surface-bright shrink-0">
                  <h3 className="text-headline-md font-headline-md text-on-surface">Edit Test Step</h3>
                </div>
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                  {/* Accordion Section */}
                  <div className="border border-outline-variant rounded">
                    <div className="flex items-center gap-2 p-3 bg-surface-bright border-b border-outline-variant cursor-pointer text-body-md font-body-md font-bold text-on-surface">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span> General Info
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-label-md font-label-md text-secondary">Step Name</label>
                        <input className="w-full border border-outline-variant rounded px-3 py-2 text-body-md font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" type="text" defaultValue="Open page chrome://newtab/" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-label-md font-label-md text-secondary">Test Step Group</label>
                        <div className="relative">
                          <select className="w-full appearance-none border border-outline-variant rounded px-3 py-2 text-body-md font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                            <option>Ungrouped</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-3 top-2 text-secondary pointer-events-none">arrow_drop_down</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-label-md font-label-md text-secondary">Labels</label>
                        <div className="relative">
                          <select className="w-full appearance-none border border-outline-variant rounded px-3 py-2 text-body-md font-body-md text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface">
                            <option>Choose labels</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-3 top-2 text-secondary pointer-events-none">arrow_drop_down</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-label-md font-label-md text-secondary">Step Description</label>
                        <textarea className="w-full border border-outline-variant rounded px-3 py-2 text-body-md font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="Step Description" rows="3"></textarea>
                      </div>
                    </div>
                  </div>
                  {/* Collapsed Accordions */}
                  <div className="flex items-center gap-2 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container cursor-pointer transition-colors text-body-md font-body-md font-bold text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span> Used on Test Cases
                  </div>
                  <div className="flex items-center gap-2 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container cursor-pointer transition-colors text-body-md font-body-md font-bold text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span> Preconditions
                  </div>
                </div>
                <div className="px-stack-md py-3 flex flex-wrap items-center gap-stack-sm border-t border-outline-variant bg-surface-bright shrink-0">
                  <button className="flex items-center gap-1 text-primary-container hover:bg-surface-container text-label-md font-label-md px-2 py-1 rounded transition-colors">
                    <span className="material-symbols-outlined text-[18px]">save</span> Save
                  </button>
                  <button className="flex items-center gap-1 text-surface-dim cursor-not-allowed text-label-md font-label-md px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-[18px]">delete</span> Delete
                  </button>
                  <button className="flex items-center gap-1 text-primary-container hover:bg-surface-container text-label-md font-label-md px-2 py-1 rounded transition-colors">
                    <span className="material-symbols-outlined text-[18px]">lock</span> Lock
                  </button>
                  <button className="flex items-center gap-1 text-primary-container hover:bg-surface-container text-label-md font-label-md px-2 py-1 rounded transition-colors">
                    <span className="material-symbols-outlined text-[18px]">upload</span> Export
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant dark:border-outline flex justify-between items-center w-full px-margin-desktop py-2 text-label-sm shrink-0">
          <span className="text-on-surface-variant text-label-sm font-label-sm">© All rights reserved, Test bee d.o.o.</span>
          <div className="flex items-center gap-4">
            <a className="text-on-surface-variant hover:text-primary transition-colors text-label-sm font-label-sm" href="#">About</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-label-sm font-label-sm" href="#">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TestCases;
