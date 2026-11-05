/** Home preview is progressive: without JavaScript every portrait is shown. */
export function initialisePeopleRails(): void {
  document
    .querySelectorAll<HTMLElement>('[data-preview-count]')
    .forEach((rail) => {
      if (rail.dataset.enhanced) return;
      const button = rail.querySelector<HTMLButtonElement>('.people-toggle');
      if (!button) return;
      rail.dataset.enhanced = 'true';
      const cards = [...rail.querySelectorAll<HTMLElement>('.person')];
      const count = Number(rail.dataset.previewCount);
      const desktop = matchMedia('(min-width: 48rem)');
      let expanded = false;
      const render = () => {
        const showAll = desktop.matches || expanded;
        cards.forEach((card, index) => {
          card.hidden = !showAll && index >= count;
        });
        button.hidden = desktop.matches;
        button.setAttribute('aria-expanded', String(showAll));
        button.textContent =
          (showAll
            ? button.dataset.collapseLabel
            : button.dataset.expandLabel) ?? '';
      };
      const controller = new AbortController();
      button.addEventListener(
        'click',
        () => {
          const previousTop = button.getBoundingClientRect().top;
          expanded = !expanded;
          render();
          // Keep the collapse control in place when preceding portraits disappear.
          if (!expanded)
            window.scrollBy({
              top: button.getBoundingClientRect().top - previousTop,
              behavior: 'instant',
            });
        },
        { signal: controller.signal },
      );
      desktop.addEventListener('change', render, { signal: controller.signal });
      window.addEventListener(
        'pagehide',
        (event) => {
          if (!event.persisted) controller.abort();
        },
        { signal: controller.signal },
      );
      render();
    });
}
