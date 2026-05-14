import { useState } from "react";
import SideNavBar from "./SideNavBar";

const CYCLES = [
  { name: "Sprint 24 - Regression", info: true },
  { name: "Release 2.4 Smoke", info: true },
  { name: "Nightly Build", info: false },
  { name: "Q2 Full Regression", info: true },
  { name: "Hotfix Verification - May 12", info: true },
];

export const TestCycles = ({ current, onNavigate }) => {
  const [selectedCycle, setSelectedCycle] = useState("Q2 Full Regression");
  const [runDialogOpen, setRunDialogOpen] = useState(false);
  const [runTab, setRunTab] = useState("single");

  return (
    <div className="flex h-screen">
      <SideNavBar current={current} onNavigate={onNavigate} />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col ml-[240px] min-w-0 bg-surface-container-low">
        {/* TopAppBar */}
        <header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline flex justify-between items-center w-full px-margin-desktop h-16 z-50 shrink-0">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:bg-surface-container-high rounded p-1 transition-colors">menu</span>
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
          <div className="flex-1 flex flex-col gap-stack-md min-h-0 overflow-hidden pb-2">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-label-md font-label-md text-secondary shrink-0">
              <span>Project Details</span>
              <span>/</span>
              <span>Project Test Cycles</span>
              <span>/</span>
              <span className="text-on-surface font-bold">{selectedCycle}</span>
            </div>

            {/* 3-Column Layout Area Below */}
            <div className="flex-1 flex gap-stack-md min-h-0 overflow-hidden">
              {/* Column 1: Test cycle */}
              <div className="w-[400px] shrink-0 flex flex-col bg-surface-container-lowest border border-outline-variant shadow-[0px_2px_4px_rgba(0,0,0,0.04)] rounded-lg overflow-hidden">
                <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-bright shrink-0">
                  <h3 className="text-headline-md font-headline-md text-on-surface">Test Cycles ({CYCLES.length})</h3>
                  <button className="flex items-center gap-1 text-primary-container border border-primary-container hover:bg-primary-container/10 px-2 py-1 rounded text-label-md font-label-md transition-colors shrink-0">
                    <span className="material-symbols-outlined text-[16px]">add</span> Add
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto flex flex-col">
                  {/* Test Cycles selector */}
                  <div className="border-b border-outline-variant">
                    <div className="px-stack-md py-2 flex gap-2 border-b border-outline-variant">
                      <div className="relative flex-1">
                        <span className="material-symbols-outlined absolute left-2 top-1.5 text-secondary text-[18px]">search</span>
                        <input className="w-full border border-outline-variant rounded pl-8 pr-3 py-1.5 text-body-sm font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Search test cycles..." type="text" />
                      </div>
                      <button className="text-primary-container border border-outline-variant p-1.5 rounded hover:bg-surface-container shrink-0">
                        <span className="material-symbols-outlined text-[18px]">filter_alt</span>
                      </button>
                    </div>
                    <div className="px-stack-md py-2 flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-2 text-secondary text-label-sm font-label-sm px-2 py-1 bg-surface rounded-full border border-outline-variant cursor-pointer whitespace-nowrap shrink-0">
                        <span className="material-symbols-outlined text-[16px]">expand_more</span> Ungrouped
                      </div>
                      {CYCLES.map((cy) => {
                        const isActive = cy.name === selectedCycle;
                        return (
                          <div
                            key={cy.name}
                            onClick={() => setSelectedCycle(cy.name)}
                            className={
                              isActive
                                ? "flex items-center gap-1.5 px-2 py-1 bg-primary-container/10 border-2 border-primary rounded-full cursor-pointer text-label-sm font-label-sm text-primary-container font-medium whitespace-nowrap shrink-0"
                                : "flex items-center gap-1.5 px-2 py-1 hover:bg-surface-container border border-outline-variant rounded-full cursor-pointer text-label-sm font-label-sm whitespace-nowrap shrink-0"
                            }
                          >
                            <span>{cy.name}</span>
                            {cy.info && (
                              <span className={`material-symbols-outlined text-[14px] ${isActive ? "" : "text-secondary"}`}>info</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="px-stack-md py-stack-md flex flex-col gap-stack-md">
                  <div className="text-headline-md font-headline-md font-bold text-primary-container">
                    {selectedCycle}
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
                      <span className="text-secondary">Test cases:</span>
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
                    <span className="material-symbols-outlined text-[18px]">upload</span> Export
                  </button>
                </div>
              </div>

              {/* Column 2: Execution flow (Diagram) */}
              <section className="w-[320px] shrink-0 flex flex-col border border-outline-variant rounded-lg bg-surface-container-lowest shadow-[0px_2px_4px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="p-3 border-b border-outline-variant flex items-center justify-center bg-surface-bright shrink-0">
                  <h3 className="text-headline-md font-headline-md text-on-surface text-center">Execution flow</h3>
                </div>
                <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center">
                  <div className="text-headline-md font-headline-md font-bold text-on-surface-variant tracking-widest mb-6">
                    START
                  </div>
                  <div className="w-full bg-primary-container/20 border-2 border-primary border-dashed rounded-lg p-3 flex items-center gap-2 shadow-sm relative mb-4">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">add</span>
                    <span className="text-body-sm font-body-sm text-on-surface font-medium truncate">Login with valid credentials</span>
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-outline-variant"></div>
                    <span className="material-symbols-outlined absolute -bottom-7 left-1/2 -translate-x-1/2 text-outline-variant text-[18px]">arrow_downward</span>
                  </div>
                  <div className="w-full bg-surface border border-outline-variant rounded-lg p-3 flex items-center gap-2 shadow-sm relative mt-4 mb-4">
                    <span className="material-symbols-outlined text-secondary text-[18px]">add</span>
                    <span className="text-body-sm font-body-sm text-on-surface truncate">Place market order - BTC/USD</span>
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-outline-variant"></div>
                    <span className="material-symbols-outlined absolute -bottom-7 left-1/2 -translate-x-1/2 text-outline-variant text-[18px]">arrow_downward</span>
                  </div>
                  <div className="w-full bg-surface border border-outline-variant rounded-lg p-3 flex items-center gap-2 shadow-sm relative mt-4 mb-8">
                    <span className="material-symbols-outlined text-secondary text-[18px]">add</span>
                    <span className="text-body-sm font-body-sm text-on-surface truncate">Export portfolio to PDF</span>
                  </div>
                  <div className="text-headline-md font-headline-md font-bold text-on-surface-variant tracking-widest mt-4">
                    END
                  </div>
                  <button
                    data-hotspot="true"
                    onClick={() => setRunDialogOpen(true)}
                    className="mt-6 flex items-center gap-1 bg-primary-container text-white hover:bg-primary-container/90 px-4 py-2 rounded text-label-md font-label-md font-bold transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">play_arrow</span> Run Execution
                  </button>
                </div>
              </section>

              {/* Column 3: Test Cases */}
              <div className="flex-1 flex flex-col bg-surface-container-lowest border border-outline-variant shadow-[0px_2px_4px_rgba(0,0,0,0.04)] rounded-lg overflow-hidden">
                <div className="p-3 border-b border-outline-variant bg-surface-bright shrink-0">
                  <h3 className="text-headline-md font-headline-md text-on-surface">Test Cases (50)</h3>
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
                    <input className="w-full border border-outline-variant rounded pl-8 pr-3 py-1.5 text-body-md font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Search test cases..." type="text" />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
                  <div className="bg-surface p-3 border border-outline-variant rounded text-body-sm font-body-sm flex justify-between items-start hover:shadow-sm transition-shadow cursor-pointer">
                    <span className="break-all text-body-md">Login with valid credentials</span>
                    <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">info</span>
                  </div>
                  <div className="bg-surface p-3 border border-outline-variant rounded text-body-sm font-body-sm hover:shadow-sm transition-shadow cursor-pointer">
                    <span className="text-body-md">Place market order - BTC/USD</span>
                  </div>
                  <div className="bg-surface p-3 border border-outline-variant rounded text-body-sm font-body-sm hover:shadow-sm transition-shadow cursor-pointer">
                    <span className="text-body-md">Cancel pending limit order</span>
                  </div>
                  <div className="bg-secondary-container/30 border border-secondary-container rounded p-3 text-body-sm font-body-sm cursor-pointer shadow-sm">
                    <span className="text-body-md font-medium">Export portfolio to PDF</span>
                  </div>
                  <div className="bg-surface p-3 border border-outline-variant rounded text-body-sm font-body-sm hover:shadow-sm transition-shadow cursor-pointer">
                    <span className="text-body-md">Verify 2FA via email</span>
                  </div>
                  <div className="bg-surface p-3 border border-outline-variant rounded text-body-sm font-body-sm hover:shadow-sm transition-shadow cursor-pointer">
                    <span className="text-body-md">Reset password from login page</span>
                  </div>
                  <div className="bg-surface p-3 border border-outline-variant rounded text-body-sm font-body-sm hover:shadow-sm transition-shadow cursor-pointer">
                    <span className="text-body-md">Withdraw funds to bank account</span>
                  </div>
                </div>
                <div className="px-stack-md py-3 flex flex-wrap items-center justify-end gap-stack-sm border-t border-outline-variant bg-surface-bright shrink-0">
                  <button className="flex items-center gap-1 text-primary-container border border-primary-container hover:bg-primary-container/10 px-2 py-1 rounded text-label-md font-label-md transition-colors">
                    <span className="material-symbols-outlined text-[16px]">add</span> Add
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

      {/* Run Execution Dialog */}
      {runDialogOpen && (
        <div
          onClick={() => setRunDialogOpen(false)}
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-stack-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
          >
            {/* Execution Tabs & Run Button */}
            <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-bright">
              <div className="flex gap-4 text-body-md font-body-md font-medium">
                <button
                  onClick={() => setRunTab("single")}
                  className={
                    runTab === "single"
                      ? "text-primary-container border-b-2 border-primary-container pb-1"
                      : "text-secondary hover:text-on-surface pb-1"
                  }
                >
                  Single Cycle
                </button>
                <button
                  onClick={() => setRunTab("multi")}
                  className={
                    runTab === "multi"
                      ? "text-primary-container border-b-2 border-primary-container pb-1"
                      : "text-secondary hover:text-on-surface pb-1"
                  }
                >
                  Multi Cycles
                </button>
              </div>
              <button className="bg-surface-container text-on-surface-variant rounded px-4 py-1.5 text-label-md font-label-md font-medium flex items-center gap-2 cursor-not-allowed">
                <span className="material-symbols-outlined text-[16px]">play_arrow</span> Run Cycle
              </button>
            </div>

            {/* Execution Form */}
            <div className="p-5 flex flex-col gap-5 overflow-y-auto">
              <div className="flex flex-col gap-1">
                <label className="text-label-md font-label-md text-on-surface-variant">Execution Name</label>
                <input className="w-full border border-outline-variant rounded px-3 py-2 text-body-md font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" type="text" defaultValue="TC_notepad_1105_154314" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-label-md font-label-md text-on-surface-variant">Execution Description</label>
                <textarea className="w-full border border-outline-variant rounded px-3 py-2 text-body-md font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="Enter test cycle execution description" rows="3"></textarea>
              </div>

              <div className="flex items-center gap-2 border-t border-outline-variant pt-5">
                <input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" id="schedule" type="checkbox" />
                <label className="text-body-md font-body-md text-on-surface cursor-pointer" htmlFor="schedule">Schedule test cycle execution for a specific time</label>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-body-md font-body-md font-medium text-on-surface">Choose Bee Service:</span>
                  <div className="flex items-center gap-4 text-body-sm font-body-sm">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" /> Select all from page
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" /> Select all Services
                    </label>
                    <button className="text-primary-container hover:text-primary">
                      <span className="material-symbols-outlined text-[18px]">refresh</span>
                    </button>
                  </div>
                </div>
                {/* Bee Service List */}
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center gap-2 text-body-sm font-body-sm cursor-pointer p-2 hover:bg-surface rounded border border-transparent hover:border-outline-variant">
                    <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                    <span>darjan-to-bee_001</span>
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ml-auto">Ready</span>
                  </label>
                  <label className="flex items-center gap-2 text-body-sm font-body-sm cursor-pointer p-2 hover:bg-surface rounded border border-transparent hover:border-outline-variant">
                    <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                    <span>darjan-to-bee_002</span>
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ml-auto">Ready</span>
                  </label>
                </div>
              </div>

              {/* Pagination/Selection Info */}
              <div className="flex justify-between items-center text-body-sm font-body-sm text-on-surface-variant bg-surface p-2 rounded">
                <div>
                  Selected number of services: <span className="text-primary-container font-medium">0</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">Services per page:
                    <select className="bg-transparent border-none text-body-sm font-body-sm py-0 pl-1 pr-6 focus:ring-0 cursor-pointer">
                      <option>10</option>
                    </select>
                  </span>
                  <span>1-2 of 2</span>
                  <div className="flex gap-1 text-on-surface-variant/50">
                    <span className="material-symbols-outlined text-[18px] cursor-not-allowed">chevron_left</span>
                    <span className="material-symbols-outlined text-[18px] cursor-not-allowed">chevron_right</span>
                  </div>
                </div>
              </div>

              {/* Environment Confirmation */}
              <div className="flex items-start gap-2 pt-4 border-t border-outline-variant">
                <input className="rounded border-outline-variant text-primary focus:ring-primary mt-1 w-4 h-4" id="confirmEnv" type="checkbox" />
                <label className="text-body-md font-body-md text-on-surface cursor-pointer leading-tight" htmlFor="confirmEnv">
                  Confirm that you want to run test cycle on this environment:<br />
                  <span className="text-primary-container font-medium">darjan's environment</span>
                </label>
              </div>
            </div>

            <div className="px-stack-md py-3 flex items-center justify-end gap-stack-sm border-t border-outline-variant bg-surface-bright">
              <button
                onClick={() => setRunDialogOpen(false)}
                className="text-on-surface hover:bg-surface-container px-3 py-1.5 rounded text-label-md font-label-md transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setRunDialogOpen(false)}
                className="flex items-center gap-1 bg-primary-container text-white hover:bg-primary-container/90 px-4 py-1.5 rounded text-label-md font-label-md font-bold transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">play_arrow</span> Run
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestCycles;
