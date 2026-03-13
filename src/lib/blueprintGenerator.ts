import { hashString, createRng } from "./seededRandom";

// Drawing command types
interface Line {
  type: "line";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  width: number;
  dash?: number[];
}

interface Rect {
  type: "rect";
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  width: number;
}

interface Cross {
  type: "cross";
  x: number;
  y: number;
  size: number;
  color: string;
  width: number;
}

interface DimLine {
  type: "dimline";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  width: number;
}

type DrawCommand = Line | Rect | Cross | DimLine;

const COLORS = {
  grid: "rgba(106, 180, 216, 0.08)", // navy-300 8%
  building: "rgba(212, 168, 67, 0.6)", // gold-400 60%
  walls: "rgba(255, 255, 255, 0.3)", // white 30%
  dims: "rgba(255, 255, 255, 0.15)", // white 15%
  circulation: "rgba(163, 209, 232, 0.2)", // navy-200 20%
  refPoints: "rgba(212, 168, 67, 0.35)", // gold-400 35%
};

export function generateBlueprint(
  seed: string,
  width: number,
  height: number
): DrawCommand[] {
  const rng = createRng(hashString(seed));
  const commands: DrawCommand[] = [];
  const margin = Math.min(width, height) * 0.12;

  // 1. Background grid
  const gridSpacing = Math.min(width, height) * 0.06;
  for (let x = 0; x < width; x += gridSpacing) {
    commands.push({
      type: "line",
      x1: x,
      y1: 0,
      x2: x,
      y2: height,
      color: COLORS.grid,
      width: 0.5,
    });
  }
  for (let y = 0; y < height; y += gridSpacing) {
    commands.push({
      type: "line",
      x1: 0,
      y1: y,
      x2: width,
      y2: y,
      color: COLORS.grid,
      width: 0.5,
    });
  }

  // 2. Building perimeter — L/U/T shapes
  const bx = margin + rng() * margin * 0.3;
  const by = margin + rng() * margin * 0.3;
  const bw = width - 2 * margin - rng() * margin * 0.5;
  const bh = height - 2 * margin - rng() * margin * 0.5;

  // Main rectangle
  commands.push({
    type: "rect",
    x: bx,
    y: by,
    w: bw,
    h: bh,
    color: COLORS.building,
    width: 2,
  });

  // Cutouts to create L/U shapes
  const cutoutCount = Math.floor(rng() * 2) + 1;
  for (let c = 0; c < cutoutCount; c++) {
    const corner = Math.floor(rng() * 4); // 0=TL, 1=TR, 2=BR, 3=BL
    const cw = bw * (0.15 + rng() * 0.2);
    const ch = bh * (0.15 + rng() * 0.2);
    let cx: number, cy: number;

    switch (corner) {
      case 0:
        cx = bx;
        cy = by;
        break;
      case 1:
        cx = bx + bw - cw;
        cy = by;
        break;
      case 2:
        cx = bx + bw - cw;
        cy = by + bh - ch;
        break;
      default:
        cx = bx;
        cy = by + bh - ch;
        break;
    }

    // Draw cutout as lines (inner edges)
    if (corner === 0 || corner === 3) {
      commands.push({
        type: "line",
        x1: cx + cw,
        y1: cy,
        x2: cx + cw,
        y2: cy + ch,
        color: COLORS.building,
        width: 2,
      });
    } else {
      commands.push({
        type: "line",
        x1: cx,
        y1: cy,
        x2: cx,
        y2: cy + ch,
        color: COLORS.building,
        width: 2,
      });
    }
    if (corner === 0 || corner === 1) {
      commands.push({
        type: "line",
        x1: cx,
        y1: cy + ch,
        x2: cx + cw,
        y2: cy + ch,
        color: COLORS.building,
        width: 2,
      });
    } else {
      commands.push({
        type: "line",
        x1: cx,
        y1: cy,
        x2: cx + cw,
        y2: cy,
        color: COLORS.building,
        width: 2,
      });
    }
  }

  // 3. Interior partition walls
  const wallCount = 4 + Math.floor(rng() * 5);
  for (let w = 0; w < wallCount; w++) {
    const horizontal = rng() > 0.5;
    if (horizontal) {
      const y = by + bh * (0.15 + rng() * 0.7);
      const x1 = bx + bw * rng() * 0.3;
      const x2 = bx + bw * (0.5 + rng() * 0.5);
      commands.push({
        type: "line",
        x1,
        y1: y,
        x2,
        y2: y,
        color: COLORS.walls,
        width: 1.5,
      });
    } else {
      const x = bx + bw * (0.15 + rng() * 0.7);
      const y1 = by + bh * rng() * 0.3;
      const y2 = by + bh * (0.5 + rng() * 0.5);
      commands.push({
        type: "line",
        x1: x,
        y1,
        x2: x,
        y2,
        color: COLORS.walls,
        width: 1.5,
      });
    }
  }

  // 4. Reference points (crosses)
  const crossCount = 4 + Math.floor(rng() * 4);
  for (let i = 0; i < crossCount; i++) {
    commands.push({
      type: "cross",
      x: bx + bw * (0.1 + rng() * 0.8),
      y: by + bh * (0.1 + rng() * 0.8),
      size: 4 + rng() * 4,
      color: COLORS.refPoints,
      width: 1,
    });
  }

  // 5. Dimension lines (outside the building)
  // Top dimension
  commands.push({
    type: "dimline",
    x1: bx,
    y1: by - margin * 0.4,
    x2: bx + bw,
    y2: by - margin * 0.4,
    color: COLORS.dims,
    width: 0.8,
  });
  // Left dimension
  commands.push({
    type: "dimline",
    x1: bx - margin * 0.4,
    y1: by,
    x2: bx - margin * 0.4,
    y2: by + bh,
    color: COLORS.dims,
    width: 0.8,
  });
  // Partial dimensions
  const partialDims = 1 + Math.floor(rng() * 3);
  for (let d = 0; d < partialDims; d++) {
    const isHoriz = rng() > 0.5;
    if (isHoriz) {
      const segStart = bx + bw * rng() * 0.5;
      const segEnd = segStart + bw * (0.2 + rng() * 0.3);
      const yPos = by + bh + margin * (0.25 + rng() * 0.2);
      commands.push({
        type: "dimline",
        x1: segStart,
        y1: yPos,
        x2: segEnd,
        y2: yPos,
        color: COLORS.dims,
        width: 0.8,
      });
    } else {
      const segStart = by + bh * rng() * 0.5;
      const segEnd = segStart + bh * (0.2 + rng() * 0.3);
      const xPos = bx + bw + margin * (0.25 + rng() * 0.2);
      commands.push({
        type: "dimline",
        x1: xPos,
        y1: segStart,
        x2: xPos,
        y2: segEnd,
        color: COLORS.dims,
        width: 0.8,
      });
    }
  }

  // 6. Circulation paths (dashed)
  const pathCount = 2 + Math.floor(rng() * 3);
  for (let p = 0; p < pathCount; p++) {
    const horizontal = rng() > 0.5;
    if (horizontal) {
      const y = by + bh * (0.2 + rng() * 0.6);
      commands.push({
        type: "line",
        x1: bx + bw * 0.05,
        y1: y,
        x2: bx + bw * (0.7 + rng() * 0.25),
        y2: y,
        color: COLORS.circulation,
        width: 1,
        dash: [6, 4],
      });
    } else {
      const x = bx + bw * (0.2 + rng() * 0.6);
      commands.push({
        type: "line",
        x1: x,
        y1: by + bh * 0.05,
        x2: x,
        y2: by + bh * (0.7 + rng() * 0.25),
        color: COLORS.circulation,
        width: 1,
        dash: [6, 4],
      });
    }
  }

  // 7. Small room labels (small rectangles inside rooms)
  const labelCount = 2 + Math.floor(rng() * 3);
  for (let l = 0; l < labelCount; l++) {
    const lx = bx + bw * (0.15 + rng() * 0.6);
    const ly = by + bh * (0.15 + rng() * 0.6);
    const lw = 8 + rng() * 16;
    const lh = 4 + rng() * 6;
    commands.push({
      type: "rect",
      x: lx,
      y: ly,
      w: lw,
      h: lh,
      color: "rgba(255, 255, 255, 0.08)",
      width: 0.5,
    });
  }

  return commands;
}

export function renderBlueprint(
  ctx: CanvasRenderingContext2D,
  commands: DrawCommand[]
) {
  for (const cmd of commands) {
    ctx.strokeStyle = cmd.color;
    ctx.lineWidth = cmd.width;

    switch (cmd.type) {
      case "line":
        ctx.beginPath();
        if (cmd.dash) ctx.setLineDash(cmd.dash);
        else ctx.setLineDash([]);
        ctx.moveTo(cmd.x1, cmd.y1);
        ctx.lineTo(cmd.x2, cmd.y2);
        ctx.stroke();
        ctx.setLineDash([]);
        break;

      case "rect":
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.strokeRect(cmd.x, cmd.y, cmd.w, cmd.h);
        break;

      case "cross":
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.moveTo(cmd.x - cmd.size, cmd.y);
        ctx.lineTo(cmd.x + cmd.size, cmd.y);
        ctx.moveTo(cmd.x, cmd.y - cmd.size);
        ctx.lineTo(cmd.x, cmd.y + cmd.size);
        ctx.stroke();
        break;

      case "dimline": {
        const tickSize = 4;
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.moveTo(cmd.x1, cmd.y1);
        ctx.lineTo(cmd.x2, cmd.y2);
        ctx.stroke();
        // Tick marks at ends
        const isHoriz =
          Math.abs(cmd.y2 - cmd.y1) < Math.abs(cmd.x2 - cmd.x1);
        if (isHoriz) {
          ctx.beginPath();
          ctx.moveTo(cmd.x1, cmd.y1 - tickSize);
          ctx.lineTo(cmd.x1, cmd.y1 + tickSize);
          ctx.moveTo(cmd.x2, cmd.y2 - tickSize);
          ctx.lineTo(cmd.x2, cmd.y2 + tickSize);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(cmd.x1 - tickSize, cmd.y1);
          ctx.lineTo(cmd.x1 + tickSize, cmd.y1);
          ctx.moveTo(cmd.x2 - tickSize, cmd.y2);
          ctx.lineTo(cmd.x2 + tickSize, cmd.y2);
          ctx.stroke();
        }
        break;
      }
    }
  }
}
