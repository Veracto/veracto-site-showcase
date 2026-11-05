import type { RefreshPlayback } from '@/content/visualization-refresh.schema';
export const refreshPlayback = {
  play: 'Play animation',
  pause: 'Pause',
  resume: 'Continue',
  replay: 'Replay',
  ready: 'Ready to play',
  running: 'Playing',
  paused: 'Paused',
  complete: 'Complete — replay available',
  static:
    'Static diagram: animation is unavailable or reduced motion is enabled.',
  hint: 'A short illustrative sequence. Start it when you are ready; numbered steps remain readable throughout.',
  scenes: {
    home: [
      'Record the current practice',
      'Compare the same work',
      'Test independent use before deciding',
    ],
    research: [
      'Trace the source and its limitation',
      'Connect data with a reproducible step',
      'Review the manuscript against both records',
    ],
    team: [
      'Send the complete working packet',
      'Review and return a specific correction',
      'Revise and pass it to the next participant',
    ],
    organisation: [
      'Give all three options the same task',
      'Record complete costs and corrections for each',
      'Compare observations without assuming a winner',
    ],
    method: [
      'Map the process',
      'Select admissible options',
      'Set the comparison and stop rules',
      'Record the comparison',
      'Test independent work',
      'Make a bounded decision',
    ],
    handover: [
      'Start a new task with the runbook',
      'Check the routine path',
      'Stop the affected step when an exception occurs',
    ],
  },
} satisfies RefreshPlayback;
