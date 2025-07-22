import * as THREE from 'three';

const HeroLights = () => {

    return ( <>
        <spotLight 
            position={[1,4,5]}
            angle={0.14}
            intensity={100}
            penumbra={0.2}
            color={'#FFFFFF'}
        />
        <spotLight 
           position={[4,5,4]}
            angle={0.4}
            intensity={40}
            penumbra={0.5}
            color={'#4cc9f0'}
        />
        <spotLight 
           position={[-4,5,4]}
            angle={0.4}
            intensity={40}
            penumbra={0.5}
            color={'#9d4edd'}
        />

        <primitive
            object={new THREE.RectAreaLight('#A259FF', 8,3,2)}
            position={[1,3,4]}
            intensity={15}
            rotation={[-Math.PI / 4, Math.PI /4, 0]}
        />

        <pointLight
            position={[0,1,0]}
            intensity={10}
            color="#7209b7"
        />

        <pointLight
            position={[1,2,-2]}
            intensity={10}
            color="#0d0084"
        />
    </> );
}
 
export default HeroLights;