import React, {FC } from 'react';
import './RoutesMenu.css'
import {SelectLabel} from "../../../../components/SelectLabel";

export type Props = {
    // style: CSSProperties;
}
export const RoutesMenu: FC<Props> = () => {
    // const {style} = props
    const v = ['1', '2', '3', '4']
    return (
        <div className="Routes-menu__container">
            <p className="Routes-menu__title">Маршруты транспортных средств</p>
            <div style={{margin: '12px'}} />
            <SelectLabel arr={v} name={'role'} label={'Поиск по номеру маршрута'}/>
            <div style={{margin: '12px'}}/>
            <div className="Routes-menu__form-field">
                <input type='text' placeholder=" " name='transport-find' />
                <label>Поиск по ГРЗ/гаражному № <br/> минимум 3 символа</label>
            </div>
            <div style={{margin: '10px'}}/>
            <div className="Routes-menu__checkbox_container">
                <input className="Login__customCheckbox" type="checkbox" id="Online-transport"/>
                <label className='Routes-menu__checkbox_label' htmlFor="Online-transport">Онлайн</label>
            </div>
            <div style={{margin: '10px'}}/>
            <div className="Routes-menu__checkbox_container">
                <input className="Login__customCheckbox" type="checkbox" id="Actual-transport"/>
                <label className='Routes-menu__checkbox_label' htmlFor="Actual-transport">Актуальный пассажиропоток</label>
            </div>
        </div>
    )
}