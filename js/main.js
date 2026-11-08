/* Trocaverde — interações (menu, reveal, contador, galeria, formulário) */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Cabeçalho que encolhe ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Menu Mobile e Dropdown ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const siteHeader = document.querySelector('.site-header');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const hasDropdowns = document.querySelectorAll('.has-dropdown');

  // Função robusta para fechar todos os dropdowns
  const closeAllDropdowns = () => {
    hasDropdowns.forEach(item => {
      item.classList.remove('is-open');
      const btn = item.querySelector('.dropdown-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  };

  // Configura os botões de dropdown
  dropdownToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Evita qualquer comportamento estranho
      e.stopPropagation(); // Impede que o clique chegue ao document
      
      const parentLi = btn.closest('.has-dropdown');
      // Verifica se ESTE menu específico já está aberto
      const isOpen = parentLi.classList.contains('is-open');
      
      // Fecha todos primeiro
      closeAllDropdowns();
      
      // Se não estava aberto, abre ele
      if (!isOpen) {
        parentLi.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Fecha dropdowns ao clicar em qualquer lugar fora deles
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) {
      closeAllDropdowns();
    }
    // Fecha o menu hamburguer no celular se clicar fora
    if (navToggle && navToggle.checked && !siteHeader.contains(e.target)) {
      navToggle.checked = false;
    }
  });

  // Adiciona a classe de sublinhado se uma página interna estiver ativa
  hasDropdowns.forEach(item => {
    if (item.querySelector('a[aria-current="page"]')) {
      item.classList.add('has-current');
    }
  });

  // Fecha o menu hamburguer ao clicar em qualquer link
  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navToggle) navToggle.checked = false;
      closeAllDropdowns(); // Garante que o dropdown feche ao navegar
    });
  });

  /* ---------- Reveal ao rolar ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- Contador animado ---------- */
  document.querySelectorAll('[data-counter]').forEach((el) => {
    const target = parseInt(el.dataset.counter, 10);
    if (!target) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      el.textContent = target.toLocaleString('pt-BR');
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(el);
        const duration = 1200;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          el.textContent = Math.floor(target * p).toLocaleString('pt-BR');
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    io.observe(el);
  });

  /* ---------- Galeria: filtros ---------- */
  const gallery = document.querySelector('[data-gallery]');
  if (gallery) {
    const buttons = document.querySelectorAll('[data-filter]');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');
        const filter = btn.dataset.filter;
        gallery.querySelectorAll('figure').forEach((fig) => {
          fig.hidden = !(filter === 'all' || fig.dataset.category === filter);
        });
      });
    });
  }

  /* ---------- Galeria: lightbox ---------- */
  const dialog = document.getElementById('lightbox');
  if (dialog && typeof dialog.showModal === 'function') {
    const content = dialog.querySelector('.lightbox-content');
    const captionEl = dialog.querySelector('.lightbox-caption');
    const closeBtn = dialog.querySelector('.close');

    const openLightbox = (fig) => {
      const swatch = fig.querySelector('.swatch');
      content.innerHTML = swatch ? swatch.innerHTML : '';
      captionEl.textContent = fig.querySelector('figcaption')?.textContent || '';
      dialog.showModal();
    };

    document.querySelectorAll('[data-lightbox]').forEach((fig) => {
      fig.addEventListener('click', () => openLightbox(fig));
      fig.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(fig);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  }

  /* ---------- Formulário de contato ---------- */
  const form = document.getElementById('contact-form');
  if (!form) return;

  const DRAFT_KEY = 'trocaverde-draft';
  const fields = form.querySelectorAll('input, select, textarea');

  /* Restaura rascunho */
  const saved = localStorage.getItem(DRAFT_KEY);
  if (saved) {
    try {
      const data = JSON.parse(saved);
      Object.entries(data).forEach(([name, value]) => {
        const field = form.elements[name];
        if (!field) return;
        if (field.type === 'checkbox') field.checked = Boolean(value);
        else field.value = value;
      });
    } catch (_) { /* rascunho inválido, ignora */ }
  }

  /* Salva rascunho */
  const saveDraft = () => {
    const data = {};
    fields.forEach((f) => {
      if (!f.name) return;
      data[f.name] = f.type === 'checkbox' ? f.checked : f.value;
    });
    localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
  };
  form.addEventListener('input', saveDraft);

  /* Campo condicional "Quantidade de peças" */
  const assunto = form.querySelector('#assunto');
  const pecasWrap = form.querySelector('#pecas-wrap');
  const updatePecas = () => {
    if (!pecasWrap) return;
    pecasWrap.hidden = assunto?.value !== 'doacao';
  };
  if (assunto) assunto.addEventListener('change', updatePecas);
  updatePecas();

  /* Contador de caracteres */
  const textarea = form.querySelector('#mensagem');
  const counter = form.querySelector('#msg-counter');
  if (textarea && counter) {
    const max = parseInt(textarea.getAttribute('maxlength'), 10) || 800;
    const updateCounter = () => { counter.textContent = `${textarea.value.length}/${max}`; };
    textarea.addEventListener('input', updateCounter);
    updateCounter();
  }

  /* Validação */
  const showError = (field, message) => {
    field.setAttribute('aria-invalid', 'true');
    const errorEl = document.getElementById(`${field.id}-error`);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.hidden = false;
    }
  };
  const clearError = (field) => {
    field.removeAttribute('aria-invalid');
    const errorEl = document.getElementById(`${field.id}-error`);
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.hidden = true;
    }
  };
  const validate = () => {
    let valid = true;
    form.querySelectorAll('[required]').forEach((field) => {
      clearError(field);
      const value = field.type === 'checkbox' ? field.checked : field.value.trim();
      if (!value) {
        showError(field, field.type === 'checkbox' ? 'É necessário marcar esta opção.' : 'Este campo é obrigatório.');
        valid = false;
        return;
      }
      if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        showError(field, 'Informe um e-mail válido.');
        valid = false;
        return;
      }
      if (field.minLength > 0 && field.value.length < field.minLength) {
        showError(field, `Mínimo de ${field.minLength} caracteres.`);
        valid = false;
      }
    });
    return valid;
  };

  fields.forEach((field) => {
    field.addEventListener('blur', () => {
      if (field.hasAttribute('required') && !field.value.trim() && field.type !== 'checkbox') {
        showError(field, 'Este campo é obrigatório.');
      } else {
        clearError(field);
      }
    });
  });

      // ... (código anterior do formulário: validação, etc) ...

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // 1. Valida os campos
      if (!validate()) {
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // 2. Prepara o botão para mostrar que está enviando
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      submitBtn.style.opacity = '0.7';

      // 3. Envia os dados para o Formspree
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // SUCESSO: Mostra a mensagem e limpa o formulário
          const success = document.getElementById('form-success');
          if (success) {
            success.hidden = false;
            success.focus();
          }
          form.reset();
          localStorage.removeItem(DRAFT_KEY);
          if (pecasWrap) pecasWrap.hidden = true;
          if (counter && textarea) counter.textContent = `0/${textarea.getAttribute('maxlength') || 800}`;
        } else {
          // ERRO DO FORMSPREE: (Ex: ID errado ou limite de envios atingido)
          alert('Ocorreu um erro ao enviar. Verifique se o ID do Formspree está correto.');
        }
      } catch (error) {
        // ERRO DE REDE: (Ex: sem internet)
        alert('Erro de conexão. Verifique sua internet e tente novamente.');
      } finally {
        // 4. Restaura o botão ao normal independente de ter dado certo ou errado
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        submitBtn.style.opacity = '1';
      }
    });
})();