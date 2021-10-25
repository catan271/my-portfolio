import styled from "styled-components"

export const Section = styled.div`
    position: relative;
    padding: 80px 0;

    .section-title {
        font-size: 60px;
        line-height: 80px;
        background: linear-gradient(120deg, #fff, #aaa);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 768px) {
        .section-title {
            font-size: 40px;
            line-height: 52px;
        }
    }
`

export const SectionSeparator = styled.div`
    height: 8px;
    border-radius: 4px;
    width: 100px;
    background: linear-gradient(120deg, #ff00e6f7, #3388ff);
`