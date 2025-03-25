import { LitElement, html, css } from 'lit';

export class SocialIcon extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`Hello WebComponent.org`;
    }
}
customElements.define('social-icon', SocialIcon);
