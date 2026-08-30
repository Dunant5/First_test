import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Dashboard from "./page";
describe("Dashboard",()=>{it("explains the product and shows projects",()=>{render(<Dashboard/>);expect(screen.getByText("Your projects remember with you.")).toBeInTheDocument();expect(screen.getAllByText("DevMind").length).toBeGreaterThan(0);});});
