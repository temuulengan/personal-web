import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Text } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useLanguage } from '../contexts/LanguageContext'

const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  mn: { name: 'Монгол', flag: '🇲🇳' },
  ko: { name: '한국어', flag: '🇰🇷' },
}

export default function LanguageSwitcher({ size = 'md' }) {
  const { language, changeLanguage } = useLanguage()

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        size={size}
        variant="ghost"
        color="displayColor"
        _hover={{ bg: '#111' }}
        _active={{ bg: '#111' }}
      >
        <Text as="span" mr={1}>
          {languages[language].flag}
        </Text>
        {languages[language].name}
      </MenuButton>
      <MenuList bg="secondary" borderColor="borderColor">
        {Object.entries(languages).map(([code, lang]) => (
          <MenuItem
            key={code}
            onClick={() => changeLanguage(code)}
            bg={language === code ? '#111' : 'secondary'}
            color="displayColor"
            _hover={{ bg: '#111' }}
          >
            <Text as="span" mr={2}>
              {lang.flag}
            </Text>
            {lang.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
