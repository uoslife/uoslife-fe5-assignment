import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const DropdownContainer = styled.div`
    position: relative;
    width: auto;
    display: inline-block;
`;

const DropdownButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.subText};
    border: 1px solid #d1d5db;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-family: ${({ theme }) => theme.fontFamily.systemUi};
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 6rem;

    &:hover {
        background-color: #f9fafb;
        border-color: #9ca3af;
    }

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.header};
        box-shadow: 0 0 0 ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.colors.header}33;
    }
`;

const DropdownIcon = styled.span<{ isOpen: boolean }>`
    font-size: ${({ theme }) => theme.fontSize.sm};
    transition: transform 0.2s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const DropdownList = styled.ul`
    position: absolute;
    top: calc(100% + ${({ theme }) => theme.spacing.xs});
    left: 0;
    right: 0;
    margin: 0;
    padding: ${({ theme }) => theme.spacing.xs};
    list-style: none;
    background-color: ${({ theme }) => theme.colors.text};
    border: 1px solid #e5e7eb;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    box-shadow: 0 ${({ theme }) => theme.spacing.xs} ${({ theme }) =>
        theme.spacing.md} rgba(0, 0, 0, 0.1);
    z-index: 10;
`;

const DropdownItem = styled.li`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.subText};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-family: ${({ theme }) => theme.fontFamily.systemUi};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #f3f4f6;
    }

    &:active {
        background-color: #e5e7eb;
    }
`;

interface DropDownProps {
    options: string[];
    onSelect?: (value: string) => void;
}

export default function DropDown({ options, onSelect }: DropDownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]);

    useEffect(() => {
        setSelected(options[0]);
    }, [options]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option: string) => {
        setSelected(option);
        setIsOpen(false);
        if (onSelect) onSelect(option);
    };

    return (
        <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
                <span>{selected}</span>
                <DropdownIcon isOpen={isOpen}>▼</DropdownIcon>
            </DropdownButton>

            {isOpen && (
                <DropdownList>
                    {options.map((option) => (
                        <DropdownItem
                            key={option}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </DropdownContainer>
    );
}
